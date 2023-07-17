import React from 'react';
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

    return (
        <div style={{ display: 'flex' }}>
            <MainMenu />
            <div style={{ width: '100%' }}>
                <SelectHeader {...headerProps} />
                <HomeItem />
            </div>
        </div>
    );
}
