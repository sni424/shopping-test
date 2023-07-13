import React from 'react';
import MainMenu from './component/common/mainMenu/pages';
import SelectHeader from './component/SelectHeader';
import { HeaderProps } from '@/shopping-test/types/mainHeader';

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
            <SelectHeader {...headerProps} />
        </div>
    );
}
