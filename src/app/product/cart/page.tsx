'use client';
import { userInfo } from '@/atoms';
import * as S from '../styles/cart';

import Image from 'next/image';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userType } from '@/types/recoilType';
import Pagination from '../../component/common/Pagination/Pagination';

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

const Cart = () => {
    const userData = useRecoilValue(userInfo);
    const [cartData, setCartData] = useState<Iprops[]>([]);
    const [newSet, setNewSet] = useState(false);

    const itemsPerPage = 3;
    const [page, setPage] = useState(1);
    const currentPageItems = cartData.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );
    const handlePagination = (pageNumber: number) => {
        setPage(pageNumber); // 페이지 번호 변경
    };
    console.log(cartData);
    const Cancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const itemId = e.currentTarget.id;
        axios({
            method: 'post',
            url: 'http://192.168.88.234:4000/v1/api/cart',
            data: {
                user_id: userData.id,
                product_id: itemId,
                amount: -1,
            },
        })
            .then((res) => {
                setNewSet((pre) => !pre);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const Delete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const itemId = e.currentTarget.id;
        axios({
            method: 'post',
            url: 'http://192.168.88.234:4000/v1/api/cart/' + itemId,
        })
            .then((res) => {
                window.alert('삭제완료');
                setNewSet((pre) => !pre);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://192.168.88.234:4000/v1/api/cart/user/' + userData.id,
        })
            .then((res) => {
                setCartData(res.data.payload);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [newSet]);

    return (
        <div style={{ width: '100%' }}>
            <title>장바구니</title>
            <S.PageName>Cart</S.PageName>
            <S.CartDiv>
                {currentPageItems?.map((data: any) => {
                    return (
                        <S.CartBox key={data.id}>
                            <S.Image>
                                <Image
                                    src="/umLogo.png"
                                    alt="상품이미지"
                                    width={100}
                                    height={100}
                                    loading="lazy"
                                />
                            </S.Image>
                            <S.ProductName>{data.product.name}</S.ProductName>
                            <S.InfoDiv>
                                <div>
                                    <S.Category>
                                        카테고리: {data.product.category.name}
                                    </S.Category>
                                    <S.Stock>
                                        할인: {data.product.stock}%
                                    </S.Stock>
                                    <S.Price>
                                        가격: {data.product.price}
                                    </S.Price>
                                    <S.Count>수량: {data.amount}</S.Count>
                                </div>
                            </S.InfoDiv>
                            <S.BtnDiv>
                                <S.CenterDiv>
                                    <S.Btn
                                        id={data.product_id}
                                        onClick={Cancel}
                                    >
                                        취소
                                    </S.Btn>
                                </S.CenterDiv>
                                <S.CenterDiv>
                                    <S.Btn id={data.id} onClick={Delete}>
                                        삭제
                                    </S.Btn>
                                </S.CenterDiv>
                            </S.BtnDiv>
                        </S.CartBox>
                    );
                })}
                <Pagination
                    totalItems={cartData.length}
                    itemsPerPage={itemsPerPage}
                    currentPage={page}
                    onPageChange={handlePagination}
                />
            </S.CartDiv>
        </div>
    );
};

export default Cart;
