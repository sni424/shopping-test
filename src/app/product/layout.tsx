import MainMenu from '../component/layout/mainMenu/pages';

const index = ({ children }: { children: React.ReactNode }) => {
    return (
        <div style={{ display: 'flex', width: '100%' }}>
            <MainMenu />
            <div style={{ marginTop: '1.3rem', width: '100%' }}>{children}</div>
        </div>
    );
};

export default index;
