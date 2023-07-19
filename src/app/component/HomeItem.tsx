'use client';

import React, { useState, useEffect } from 'react';
import ItemBlock from './common/ItemBlock/ItemBlock';
import * as S from './styles/HomeItem';
import Pagination from './common/Pagination/Pagination';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { userInfo } from '@/atoms';
import { userType } from '@/types/recoilType';

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

interface Iprops {
    stock: string;
    images: Iimage[];
    name: string;
    price: string;
    id: number;
    hearts: userType[];
}

interface HomeItemProps {
    dataValue: string;
}

const HomeItem = (props: HomeItemProps) => {
    const { dataValue } = props;
    const itemsPerPage = 8; // 한 페이지에 보여질 아이템 개수
    const [page, setPage] = useState(1); // 페이지 번호 상태 변수
    const [itemData, setItemData] = useState<Iprops[]>([]);
    const [refreshData, setRefreshData] = useState(false);

    const currentPageItems = itemData.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

    const handlePagination = (pageNumber: number) => {
        setPage(pageNumber); // 페이지 번호 변경
    };
    const userData = useRecoilValue(userInfo);
    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://192.168.88.234:4000/v1/api/product ',
        })
            .then((res) => {
                switch (dataValue) {
                    case 'Men':
                        const MenData = res.data.payload.filter(
                            (data: any) => data.category_code === 'G-1'
                        );
                        setItemData([...MenData]);
                        break;
                    case 'Women':
                        const WomenData = res.data.payload.filter(
                            (data: any) => data.category_code === 'G-2'
                        );
                        setItemData([...WomenData]);
                        break;
                    default:
                        setItemData([...res.data.payload]);
                        break;
                }
            })
            .catch((err) => {
                console.log(err.response);
            });
        setPage(1);
        console.log(itemData);
    }, [dataValue, refreshData]);

    return (
        <div>
            <S.HomeItemDiv>
                {currentPageItems.map(
                    (data, index): React.ReactElement => (
                        <ItemBlock
                            key={index}
                            stock={data.stock}
                            images={data.images[0]?.path}
                            name={data.name}
                            price={data.price}
                            productId={data.id}
                            heart={data.hearts}
                            userId={userData.id}
                            setRefreshData={setRefreshData}
                            page={page}
                            dataValue={dataValue}
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
