'use client';

import React from 'react';
import * as S from './styles';

import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import * as decode from 'jose';
import { userType } from '@/types/recoilType';
import { defaultUrl } from '@/utils/axios';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { reStart } from '@/atoms';

const Login = () => {
    const { register, handleSubmit, formState, reset, setError } = useForm({
        mode: 'onChange',
    });
    const route = useRouter();
    const serUser = useSetRecoilState(reStart);

    const onSubmit = (data: any) => {
        axios({
            method: 'POST',
            url: `${defaultUrl}/user/signin`,
            data: {
                email: data.email,
                password: data.password,
            },
        })
            .then((res) => {
                console.log(res);
                window.localStorage.setItem(
                    'accessToken',
                    res.data.payload.token
                );
                window.localStorage.setItem(
                    'refreshToken',
                    res.data.payload.refreshToken
                );
                window.alert('로그인이 성공하였습니다.');
                serUser((pre: any) => !pre);
                route.push('/');
            })
            .catch((err) => {
                console.log(err.response.data.message);
            });
    };
    const userEmail = {
        required: '닉네임을 적어주세요',
    };

    const userPassword = {
        required: '비밀번호를 적어주세요',
        minLength: {
            value: 6,
            message: '6글자가 넘어야 합니다.',
        },
    };

    return (
        <S.Signup>
            <S.SignupDiv>
                <h1>로그인</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <S.FormDiv>
                        <label htmlFor="email">email</label>
                        <input
                            type="email"
                            id="email"
                            {...register('email', userEmail)}
                        ></input>
                        {formState.errors.email?.message !== undefined
                            ? `${formState.errors.email?.message}`
                            : ''}
                    </S.FormDiv>
                    <S.FormDiv>
                        <label htmlFor="password">password</label>
                        <input
                            type="password"
                            id="password"
                            {...register('password', userPassword)}
                        ></input>
                        {formState.errors.password?.message !== undefined
                            ? `${formState.errors.password?.message}`
                            : ''}
                    </S.FormDiv>
                    <S.FormDiv>
                        <button type="submit">로그인</button>
                    </S.FormDiv>
                    <S.SignupP>
                        아이디가 없다면?
                        <Link href="signup">
                            <span>회원가입</span>
                        </Link>
                    </S.SignupP>
                </form>
            </S.SignupDiv>
        </S.Signup>
    );
};

export default Login;
