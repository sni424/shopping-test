'use client';

import React, { useState, useEffect } from 'react';
import ItemBlock from './common/ItemBlock/ItemBlock';
import * as S from './styles/HomeItem';
import Pagination from './common/Pagination/Pagination';
import axios from 'axios';

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
}
const HomeItem = () => {
    const itemsPerPage = 8; // 한 페이지에 보여질 아이템 개수
    const [page, setPage] = useState(1); // 페이지 번호 상태 변수
    const [itemData, setItemData] = useState<Iprops[]>([]);

    const currentPageItems = itemData.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

    const handlePagination = (pageNumber: number) => {
        setPage(pageNumber); // 페이지 번호 변경
    };

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://192.168.88.234:4000/v1/api/product ',
        })
            .then((res) => {
                console.log(res.data.payload);
                setItemData(res.data.payload);
            })
            .catch((err) => {
                console.log(err.response);
            });
    }, []);

    return (
        <div>
            <S.HomeItemDiv>
                {currentPageItems.map(
                    (data, index): React.ReactElement => (
                        <ItemBlock
                            key={index}
                            stock={data.stock}
                            images={data.images[0].path}
                            name={data.name}
                            price={data.price}
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
