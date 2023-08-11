'use client';
import * as S from '../styles/cart';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { userType } from '@/types/recoilType';
import Pagination from '../../component/common/Pagination/Pagination';
import { defaultUrl, reFresh } from '@/utils/axios';
import { reStart } from '@/atoms';

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
    const [page, setPage] = useState(1);
    const [tempC, setTempC] = useRecoilState(reStart);
    const router = useRouter();

    let formData = new FormData();
    let newFormData: any[] = [];
    const itemsPerPage = 3;

    const currentPageItems = cartData.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );
    const handlePagination = (pageNumber: number) => {
        setPage(pageNumber); // 페이지 번호 변경
    };

    const changeCheck = (e: any) => {
        const cartId = e.target.value;
        const isChecked = e.target.checked;

        if (isChecked) {
            // 체크박스가 선택되면 해당 카트 ID를 newFormData에 추가합니다.
            newFormData.push(cartId);
        } else {
            // 체크박스가 선택 해제되면 해당 카트 ID를 newFormData에서 제외합니다.
            newFormData = newFormData.filter((data) => data !== cartId);
        }
        formData.delete('cart_id');
        newFormData.forEach((data) => {
            formData.append('cart_id', data);
        });
    };

    const buyStuff = (e: any) => {
        axios({
            method: 'post',
            url: `${defaultUrl}/order/select`,
            headers: {
                Authorization: `Bearer ${window.localStorage.accessToken}`,
                'Content-Type': 'multipart/form-data',
            },
            data: formData,
        })
            .then((res) => {
                window.alert('구매완료');
                setTempC((pre: any) => !pre);
            })
            .catch((res) => {
                console.log(res.response);
            });
    };

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
            .catch(async (err) => {
                if (err.response.data.detail === 'token has expired') {
                    await reFresh()
                        .then((res) => {
                            setNewSet((pre) => !pre);
                        })
                        .catch((err) => {
                            router.push('/login');
                        });
                }
                console.log(err.response);
            });
    }, [newSet, tempC]);
    console.log(currentPageItems);

    return (
        <div style={{ width: '100%' }}>
            <title>장바구니</title>
            <S.PageName>Cart</S.PageName>
            <S.CartDiv>
                {currentPageItems?.map((data: any) => {
                    const discountPercent = data.product?.discounts[0]?.percent;

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
                                    <S.Btn id={data.product_id}>취소</S.Btn>
                                </S.CenterDiv>
                                <S.CenterDiv>
                                    <S.Btn id={data.id}>삭제</S.Btn>
                                </S.CenterDiv>
                            </S.BtnDiv>
                        </S.CartBox>
                    );
                })}

                <button onClick={buyStuff}>상품 구매</button>

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
