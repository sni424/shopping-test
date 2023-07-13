import { HeaderProps } from '@/shopping-test/types/mainHeader';
import React from 'react';
import SelectHeader from '../../component/SelectHeader';

const Collections = () => {
    const headerProps: HeaderProps = {
        title: 'Collections',
        firstSearch: 'New',
        secondSearch: 'Hot',
        thirdSearch: 'My',
    };
    return (
        <>
            <SelectHeader {...headerProps} />
        </>
    );
};

export default Collections;
