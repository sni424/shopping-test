'use client';

import React, { useEffect, useState } from 'react';
import * as S from '../../styles/ItemBlock';
import { AiOutlineUser, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BiShoppingBag } from 'react-icons/bi';
import Image from 'next/image';
import axios from 'axios';
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
    images?: string;
    name: string;
    price: string;
    productId: number;
    heart?: userType[] | userType;
    userId?: number;
    setRefreshData: React.Dispatch<React.SetStateAction<boolean>>;
    page: number;
    dataValue?: string;
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
    } = props;
    const [heartTrue, setHeartTrue] = useState(false);

    const postHeart = () => {
        axios({
            method: 'post',
            url: 'http://192.168.88.234:4000/v1/api/heart',
            data: {
                user_id: userId,
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
    };

    const deletHeart = () => {
        axios({
            method: 'delete',
            url: 'http://192.168.88.234:4000/v1/api/heart/product/' + productId,
            data: {
                user_id: userId,
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
            url: 'http://192.168.88.234:4000/v1/api/cart',
            data: {
                user_id: userId,
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

    useEffect(() => {
        if (Array.isArray(heart) && heart.length >= 1) {
            heart?.forEach((data: any) => {
                if (data.id === userId) {
                    setHeartTrue(true);
                }
            });
        } else if (heart && typeof heart === 'object') {
            if (heart?.id === userId) {
                setHeartTrue(true);
            } else {
                setHeartTrue(false);
            }
        } else {
            setHeartTrue(false);
            console.log('완성3');
        }
    }, [heart, page, dataValue]);

    return (
        <S.BoxDiv>
            <S.MarginDiv>
                <S.TopInfo>
                    <S.Discount>{stock}%</S.Discount>
                    <S.Heart isTrue={heartTrue}>
                        {heartTrue ? (
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
                    <li>₩{price}</li>
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
