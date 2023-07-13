import { HeaderProps } from '@/shopping-test/types/mainHeader';
import React from 'react';
import SelectHeader from '../../component/SelectHeader';

const Men = () => {
    const headerProps: HeaderProps = {
        title: 'Men',
        firstSearch: 'Small',
        secondSearch: 'Medium',
        thirdSearch: 'Large',
    };

    return (
        <>
            <SelectHeader {...headerProps} />
        </>
    );
};

export default Men;
