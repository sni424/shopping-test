import React from 'react';
import * as S from '../../styles/ItemBlock';
import { AiOutlineUser, AiOutlineHeart } from 'react-icons/ai';
import Image from 'next/image';

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
    images: string;
    name: string;
    price: string;
}
const ItemBlock = (props: Iprops) => {
    const { stock, images, name, price } = props;
    return (
        <S.BoxDiv>
            <S.MarginDiv>
                <S.TopInfo>
                    <S.Discount>{stock}%</S.Discount>
                    <S.Heart>
                        <AiOutlineHeart />
                    </S.Heart>
                </S.TopInfo>
                <S.Image>
                    <Image
                        src={images}
                        alt="상품이미지"
                        width={200}
                        height={150}
                        loading="lazy"
                    />
                </S.Image>
                <S.GoodsName>{name}</S.GoodsName>
                <S.Price>
                    <li>₩{price}</li>
                </S.Price>
            </S.MarginDiv>
        </S.BoxDiv>
    );
};

export default ItemBlock;
