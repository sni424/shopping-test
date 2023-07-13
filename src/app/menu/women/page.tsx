import React from 'react';
import SelectHeader from '../../component/SelectHeader';
import { HeaderProps } from '@/shopping-test/types/mainHeader';

const Women = () => {
    const headerProps: HeaderProps = {
        title: 'Women',
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

export default Women;
