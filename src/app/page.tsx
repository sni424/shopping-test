'use client';

import React, { useState } from 'react';
import MainMenu from './component/layout/mainMenu/pages';
import SelectHeader from './component/SelectHeader';
import { HeaderProps } from '@/types/mainHeader';
import ItemBlock from './component/common/ItemBlock/ItemBlock';
import HomeItem from './component/HomeItem';

export default function Home() {
    const headerProps: HeaderProps = {
        title: 'Home',
        firstSearch: 'All',
        secondSearch: 'Men',
        thirdSearch: 'Women',
    };

    const [dataValue, setDataValue] = useState<string>('All');

    return (
        <div style={{ display: 'flex' }}>
            <title>어글리뮤즈</title>
            <MainMenu />
            <div style={{ width: '100%' }}>
                <SelectHeader {...headerProps} setDataValue={setDataValue} />
                <HomeItem dataValue={dataValue} />
            </div>
        </div>
    );
}
