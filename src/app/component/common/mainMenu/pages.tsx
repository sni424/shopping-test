import React from 'react';
import * as S from './styles';
import Link from 'next/link';

const MainMenu = () => {
    return (
        <S.MainMenu>
            <S.MainUl>
                <Link href="/menu/new">
                    <li>New</li>
                </Link>
                <Link href="/menu/men">
                    <li>Men</li>
                </Link>
                <Link href="/menu/women">
                    <li>Women</li>
                </Link>
                <Link href="/menu/collections">
                    <li>Collections</li>
                </Link>
                <Link href="/menu/sportstyle">
                    <li>Sport style</li>
                </Link>
                <Link href="/menu/custom">
                    <li>Custom</li>
                </Link>
            </S.MainUl>
        </S.MainMenu>
    );
};

export default MainMenu;
