'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AiOutlineUser, AiOutlineHeart } from 'react-icons/ai';
import { BiShoppingBag, BiSolidUser } from 'react-icons/bi';

import * as S from './styles';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import LoginPopup from '../../popup/LoginPopup';
import { reStart } from '@/atoms';

const Header = () => {
    const [user, setUser] = useState(false);
    const [popUp, setPopUp] = useState(false);
    const reLoadBool = useRecoilValue(reStart);
    const popupToggle = () => {
        setPopUp((pre) => !pre);
    };

    useEffect(() => {
        if (window.localStorage.getItem('accessToken')) {
            setUser(true);
        } else {
            setUser(false);
        }
    }, [reLoadBool]);
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
                    <S.IconLi>
                        {user ? (
                            // <Link href="/user" style={{ color: 'black' }}>
                            <S.HoverDiv onClick={popupToggle}>
                                <BiSolidUser />
                            </S.HoverDiv>
                        ) : (
                            // </Link>
                            <Link href="/login" style={{ color: 'black' }}>
                                <S.HoverDiv>
                                    <AiOutlineUser />
                                </S.HoverDiv>
                            </Link>
                        )}
                        {popUp ? (
                            <LoginPopup setUser={setUser} setPopUp={setPopUp} />
                        ) : (
                            ''
                        )}
                    </S.IconLi>
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
