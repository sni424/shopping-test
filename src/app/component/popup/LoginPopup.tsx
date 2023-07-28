import React from 'react';
import * as S from '../styles/LoginPopup';
import { useRouter } from 'next/navigation';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { reStart } from '@/atoms';

const LoginPopup = (props: any) => {
    const { setUser, setPopUp } = props;
    const reLoadBool = useSetRecoilState(reStart);
    const router = useRouter();

    const resetInfo = () => {
        window.localStorage.removeItem('accessToken');
        window.localStorage.removeItem('refreshToken');
        window.localStorage.removeItem('recoil-persist');
        setUser(false);
        setPopUp(false);
        router.push('/');
        reLoadBool((pre: boolean) => !pre);
    };
    return (
        <S.PopupDiv>
            <S.PopupUl>
                <li>개인정보</li>
                <S.LineDiv />
                <li onClick={resetInfo}>로그아웃</li>
            </S.PopupUl>
        </S.PopupDiv>
    );
};

export default LoginPopup;
