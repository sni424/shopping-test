'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import ItemBlock from './common/ItemBlock/ItemBlock';
import * as S from './styles/HomeItem';
import Pagination from './common/Pagination/Pagination';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { reStart } from '@/atoms';
import { userType } from '@/types/recoilType';
import { defaultUrl, reFresh } from '@/utils/axios';

interface Iimage {
    created_at: string;
    id: number;
    path: string;
    product_id: number;
    size: number;
    title: string;
    type: string;
    updated_at: string;
}
interface Idiscounts {
    content: string;
    created_at: string;
    id: number;
    is_active: boolean;
    name: string;
    percent: number;
    product_id: number;
    updated_at: string;
}

interface Iprops {
    stock: string;
    images: Iimage[];
    name: string;
    price: string;
    id: number;
    hearts: boolean;
    discount_cost: number;
    discounts: Idiscounts[];
}

interface HomeItemProps {
    dataValue: string;
}

interface Idict {
    Men: string;
    Women: string;
    All: string;
}

const dict = {
    Men: '?category=G-1',
    Women: '?category=G-2',
    All: '',
};

type valueType = 'Men' | 'Women' | 'All';

const HomeItem = (props: HomeItemProps) => {
    const { dataValue } = props;
    const router = useRouter();
    const itemsPerPage = 8; // 한 페이지에 보여질 아이템 개수
    const [page, setPage] = useState(1); // 페이지 번호 상태 변수
    const [itemData, setItemData] = useState<Iprops[]>([]);
    const [refreshData, setRefreshData] = useState(false);
    const reLoadBool = useRecoilValue(reStart);

    const currentPageItems = itemData.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );
    const handlePagination = (pageNumber: number) => {
        setPage(pageNumber); // 페이지 번호 변경
    };

    const getProduct = (header: any) => {
        axios({
            method: 'GET',
            url:
                `${defaultUrl}/product/` +
                `${(dict as Idict)[dataValue as valueType]}`,
            headers: header,
        })
            .then((res) => {
                setItemData([...res.data.payload]);
            })
            .catch(async (err) => {
                if (err.response.data.detail === 'token has expired') {
                    await reFresh()
                        .then((res) => {
                            setRefreshData((pre) => !pre);
                        })
                        .catch((err) => {
                            router.push('/login');
                        });
                }
                console.log(err.response);
            });
    };

    useEffect(() => {
        if (window.localStorage.accessToken) {
            const header = {
                Authorization: `Bearer ${window.localStorage.accessToken}`,
            };
            getProduct(header);
        } else {
            getProduct({ Authorization: '' });
        }
        setPage(1);
    }, [dataValue, refreshData, reLoadBool]);

    return (
        <div>
            <S.HomeItemDiv>
                {currentPageItems?.map(
                    (data, index): React.ReactElement => (
                        <ItemBlock
                            key={index}
                            stock={data.stock}
                            images={data.images[0]?.path}
                            name={data.name}
                            price={data.price}
                            productId={data.id}
                            heart={data.hearts}
                            setRefreshData={setRefreshData}
                            page={page}
                            dataValue={dataValue}
                            discountCost={data.discount_cost}
                            discounts={data.discounts[0]}
                        />
                    )
                )}
            </S.HomeItemDiv>
            <Pagination
                totalItems={itemData.length}
                itemsPerPage={itemsPerPage}
                currentPage={page}
                onPageChange={handlePagination}
            />
        </div>
    );
};

export default HomeItem;
