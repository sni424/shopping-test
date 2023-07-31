'use client';

import React, { useEffect, useState } from 'react';

import * as S from '../styles/heart';
import axios from 'axios';
import { useRecoilValue } from 'recoil';

import ItemBlock from '../../component/common/ItemBlock/ItemBlock';
import { userType } from '@/types/recoilType';
import Pagination from '../../component/common/Pagination/Pagination';
import { defaultUrl } from '@/utils/axios';

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

const Heart = () => {
    const [heartData, setHeartData] = useState<Iprops[]>([]);
    const [refreshData, setRefreshData] = useState(false);
    const [dataLength, setDataLength] = useState(false);

    const itemsPerPage = 8;
    const [page, setPage] = useState(1);
    const currentPageItems = heartData.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );
    const handlePagination = (pageNumber: number) => {
        setPage(pageNumber); // 페이지 번호 변경
    };

    useEffect(() => {
        axios({
            method: 'get',
            url: `${defaultUrl}/heart/me`,
            headers: {
                Authorization: `Bearer ${window.localStorage.accessToken}`,
            },
        })
            .then((res) => {
                setHeartData(res.data.payload);
                setDataLength(false);
            })
            .catch((err) => {
                console.log(err);
                setDataLength(true);
            });
    }, [refreshData]);
    console.log(currentPageItems);
    return (
        <div>
            <S.PageName>Heart</S.PageName>
            <S.HeartItem>
                {dataLength ? (
                    <div>데이터 없음</div>
                ) : (
                    currentPageItems?.map(
                        (data: any, index): React.ReactElement => (
                            <ItemBlock
                                key={index}
                                stock={data.product.stock}
                                images={data.product.images[0]?.path}
                                name={data.product.name}
                                price={data.product.price}
                                productId={data.product_id}
                                userId={data.user_id}
                                heart={true}
                                setRefreshData={setRefreshData}
                                page={page}
                                discountCost={data.discount_cost}
                                discounts={data.product.discounts[0]}
                            />
                        )
                    )
                )}
            </S.HeartItem>
            <Pagination
                totalItems={heartData.length}
                itemsPerPage={itemsPerPage}
                currentPage={page}
                onPageChange={handlePagination}
            />
        </div>
    );
};

export default Heart;
