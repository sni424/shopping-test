'useClient';

import React from 'react';
import Link from 'next/link';
import { AiOutlineUser, AiOutlineHeart } from 'react-icons/ai';
import { BiShoppingBag } from 'react-icons/bi';

import * as S from './styles';

const Header = () => {
    return (
        <S.HeaderDiv>
            <S.BrandName>
                <Link href="/">UglyMews</Link>
            </S.BrandName>

            <S.FelxDiv>
                <S.HeaderMenu>
                    <Link href="/menu/collections">
                        <S.Li>Collections</S.Li>
                    </Link>
                    <Link href="/menu/men">
                        <S.Li>Men</S.Li>
                    </Link>
                    <Link href="/menu/women">
                        <S.Li>Women</S.Li>
                    </Link>
                    <Link href="/menu/aboutus">
                        <S.Li>About Us</S.Li>{' '}
                    </Link>
                    <Link href="/menu/Contacts">
                        <S.Li>Contacts</S.Li>{' '}
                    </Link>
                </S.HeaderMenu>
                <S.IconUl>
                    <S.Li>
                        <Link href="/login" style={{ color: 'black' }}>
                            <AiOutlineUser />
                        </Link>
                    </S.Li>
                    <S.Li>
                        <AiOutlineHeart />
                    </S.Li>
                    <S.Li>
                        <BiShoppingBag />
                    </S.Li>
                </S.IconUl>
            </S.FelxDiv>
        </S.HeaderDiv>
    );
};

export default Header;
