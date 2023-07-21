'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { AiOutlineUser, AiOutlineHeart } from 'react-icons/ai';
import { BiShoppingBag, BiSolidUser } from 'react-icons/bi';

import * as S from './styles';

const Header = () => {
    const [user, setUser] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('accessToken')) {
            setUser(true);
        } else {
            setUser(false);
        }
    }, [user]);
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
                        {user ? (
                            <Link href="/user" style={{ color: 'black' }}>
                                <BiSolidUser />
                            </Link>
                        ) : (
                            <Link href="/login" style={{ color: 'black' }}>
                                <AiOutlineUser />
                            </Link>
                        )}
                    </S.Li>
                    <S.Li>
                        <Link href="/product/heart" style={{ color: 'black' }}>
                            <AiOutlineHeart />
                        </Link>
                    </S.Li>
                    <S.Li>
                        <Link href="/product/cart" style={{ color: 'black' }}>
                            <BiShoppingBag />
                        </Link>
                    </S.Li>
                </S.IconUl>
            </S.FelxDiv>
        </S.HeaderDiv>
    );
};

export default Header;
