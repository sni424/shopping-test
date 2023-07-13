import { HeaderProps } from '@/shopping-test/types/mainHeader';
import React from 'react';
import SelectHeader from '../../component/SelectHeader';

const SportStyle = () => {
    const headerProps: HeaderProps = {
        title: 'Sport Style',
        firstSearch: 'Men',
        secondSearch: 'Women',
        thirdSearch: 'Both',
    };
    return (
        <>
            <SelectHeader {...headerProps} />
        </>
    );
};

export default SportStyle;
