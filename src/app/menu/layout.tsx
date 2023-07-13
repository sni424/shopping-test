import React from 'react';
import MainMenu from '../component/common/mainMenu/pages';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div style={{ display: 'flex' }}>
            <MainMenu />
            {children}
        </div>
    );
};

export default Layout;
