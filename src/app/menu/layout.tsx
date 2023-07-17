import React from 'react';
import MainMenu from '../component/layout/mainMenu/pages';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div style={{ display: 'flex' }}>
            <MainMenu />
            {children}
        </div>
    );
};

export default Layout;
