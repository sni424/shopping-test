import { useSetRecoilState } from 'recoil';

import axios from 'axios';
import * as decode from 'jose';

export const defaultUrl = 'http://192.168.88.231:7000/v1/api';

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
        console.log(err.response);
    }
};
