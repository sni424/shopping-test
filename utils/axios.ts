import { useSetRecoilState } from 'recoil';

import axios from 'axios';
import * as decode from 'jose';

export const defaultUrl = 'http://192.168.88.231:8000/v1/api';

export const reFresh = async () => {
    try {
        const res = await axios({
            method: 'post',
            url: 'http://192.168.88.231:4000/v1/api/user/refresh',
            data: {
                refreshToken: `${window.localStorage.refreshToken}`,
            },
        });

        window.localStorage.setItem('accessToken', res.data.payload.token);
        window.localStorage.setItem(
            'refreshToken',
            res.data.payload.refreshToken
        );
    } catch (err: any) {
        window.localStorage.removeItem('accessToken');
        window.localStorage.removeItem('refreshToken');
        window.localStorage.removeItem('recoil-persist');
        window.alert('로그인세션이 만료되어 로그인 페이지로 이동합니다.');
        console.log(err.response);
    }
};
