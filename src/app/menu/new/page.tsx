import { HeaderProps } from '@/shopping-test/types/mainHeader';
import React from 'react';
import SelectHeader from '../../component/SelectHeader';

const New = () => {
    const headerProps: HeaderProps = {
        title: 'New',
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

export default New;
