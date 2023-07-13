import React from 'react';
import { HeaderProps } from '@/shopping-test/types/mainHeader';
import SelectHeader from '../../component/SelectHeader';

const Custom = () => {
    const headerProps: HeaderProps = {
        title: 'Custom',
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

export default Custom;
