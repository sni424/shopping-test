'use client';

import React, { useEffect, useState } from 'react';
import * as S from '../../styles/ItemBlock';
import { AiOutlineUser, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BiShoppingBag } from 'react-icons/bi';
import Image from 'next/image';
import axios from 'axios';
import { userType } from '@/types/recoilType';
import { defaultUrl } from '@/utils/axios';

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
    images?: string;
    name: string;
    price: string;
    productId: number;
    heart: boolean;
    userId?: number;
    setRefreshData: React.Dispatch<React.SetStateAction<boolean>>;
    page: number;
    dataValue?: string;
    discountCost: number;
    discounts: Idiscounts;
}

type HeartProps = {
    isTrue: boolean;
    onClick: () => void;
};

const ItemBlock = (props: Iprops) => {
    const {
        stock,
        images,
        name,
        price,
        userId,
        productId,
        heart,
        setRefreshData,
        page,
        dataValue,
        discountCost,
        discounts,
    } = props;
    const [heartTrue, setHeartTrue] = useState(false);

    const postHeart = () => {
        if (window.localStorage.accessToken) {
            axios({
                method: 'POST',
                url: `${defaultUrl}/heart`,
                headers: {
                    authorization: `Bearer ${window.localStorage.accessToken}`,
                },
                data: {
                    product_id: productId,
                },
            })
                .then((res) => {
                    window.alert('좋아요 성공');
                    setRefreshData((prev) => !prev);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            window.alert('해당기능은 로그인해야 사용이 가능합니다.');
        }
    };

    const deletHeart = () => {
        axios({
            method: 'delete',
            url: `${defaultUrl}/heart/revert/` + productId,
            headers: {
                authorization: `Bearer ${window.localStorage.accessToken}`,
            },
            data: {
                product_id: productId,
            },
        })
            .then((res) => {
                window.alert('좋아요 취소');
                setRefreshData((prev) => !prev);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const inputCart = () => {
        axios({
            method: 'post',
            url: `${defaultUrl}/cart`,
            headers: {
                authorization: `Bearer ${window.localStorage.accessToken}`,
            },
            data: {
                product_id: productId,
                amount: 1,
            },
        })
            .then((res) => {
                window.alert('장바구니로 이동');
                setRefreshData((prev) => !prev);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <S.BoxDiv>
            <S.MarginDiv>
                <S.TopInfo>
                    {discounts ? (
                        <S.Discount>{discounts.percent}%</S.Discount>
                    ) : (
                        <S.Discount>0%</S.Discount>
                    )}

                    <S.Heart isTrue={heart}>
                        {heart ? (
                            <AiFillHeart onClick={deletHeart} />
                        ) : (
                            <AiOutlineHeart onClick={postHeart} />
                        )}
                    </S.Heart>
                </S.TopInfo>
                {images ? (
                    <S.Image>
                        <Image
                            src={images}
                            alt="상품이미지"
                            width={200}
                            height={150}
                            loading="lazy"
                        />
                    </S.Image>
                ) : (
                    <div>안녕</div>
                )}

                <S.GoodsName>{name}</S.GoodsName>
                <S.Price>
                    <li>₩{discountCost ? discountCost : price}</li>
                </S.Price>
                <S.AbsolDiv>
                    <S.Cicle onClick={inputCart}>
                        <BiShoppingBag />
                    </S.Cicle>
                </S.AbsolDiv>
            </S.MarginDiv>
        </S.BoxDiv>
    );
};

export default ItemBlock;
