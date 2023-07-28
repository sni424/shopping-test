'use client';
import * as S from '../styles/cart';

import Image from 'next/image';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
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

const Cart = () => {
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
    const Cancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const itemId = e.currentTarget.id;
        axios({
            method: 'post',
            url: `${defaultUrl}/cart`,
            headers: {
                Authorization: `Bearer ${window.localStorage.accessToken}`,
            },
            data: {
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
            method: 'delete',
            url: `${defaultUrl}/cart/` + itemId,
            headers: {
                Authorization: `Bearer ${window.localStorage.accessToken}`,
            },
        })
            .then((res) => {
                window.alert('삭제완료');
                setNewSet((pre) => !pre);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    console.log(currentPageItems);
    useEffect(() => {
        axios({
            method: 'get',
            url: `${defaultUrl}/cart/me`,
            headers: {
                Authorization: `Bearer ${window.localStorage.accessToken}`,
            },
        })
            .then((res) => {
                setCartData(res.data.payload);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [newSet]);

    const changeCheck = (e: any) => {
        console.log(e.target.value);
    };

    return (
        <div style={{ width: '100%' }}>
            <title>장바구니</title>
            <S.PageName>Cart</S.PageName>
            <S.CartDiv>
                {currentPageItems?.map((data: any) => {
                    const discountPercent = data.product?.discounts[0]?.percent;
                    console.log(discountPercent);
                    const discountedPrice = discountPercent
                        ? Number(data.product?.price) *
                          ((100 - Number(discountPercent)) / 10) *
                          data?.amount
                        : data.product?.price * Number(data?.amount);

                    return (
                        <S.CartBox key={data.id}>
                            <input
                                type="checkbox"
                                value={data.id}
                                onChange={(e) => changeCheck(e)}
                            />
                            <S.Image>
                                <Image
                                    src={data?.product?.images[0]?.path}
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
                                    {data.product?.discounts[0]?.percent ? (
                                        <S.Stock>
                                            할인:{' '}
                                            {
                                                data.product?.discounts[0]
                                                    ?.percent
                                            }
                                            %
                                        </S.Stock>
                                    ) : (
                                        <></>
                                    )}

                                    <S.Price>가격: {discountedPrice}</S.Price>
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
