'use client';

import React from 'react';
import * as S from './styles';

import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface SubmitData {
    email: string;
    name: string;
    password: string;
    passwordConfirm: string;
    phoneNumber: number;
}

const Signup = () => {
    const { register, handleSubmit, formState, reset, setError } = useForm({
        mode: 'onChange',
    });
    const router = useRouter();

    const onSubmit = (data: SubmitData) => {
        const { email, name, password, phoneNumber } = data;
        if (data.password !== data.passwordConfirm) {
            setError(
                'passwordConfirm',
                {
                    message: '비밀번호가 서로 일치하지 않습니다.',
                },
                { shouldFocus: true }
            );
        } else {
            axios({
                method: 'post',
                url: 'http://192.168.88.234:4000/v1/api/user',
                data: {
                    uid: name,
                    password: password,
                    phone_number: phoneNumber,
                    email: email,
                },
            })
                .then(() => {
                    window.alert('로그인이 완료되었습니다.');
                    router.push('/login');
                })
                .catch((err) => {
                    console.log(err.message);
                });

            reset();
        }
    };
    const userEmail = {
        required: '이메일을 적어주세요',
    };
    const userName = {
        required: '이름을 적어주세요',
    };
    const userPassword = {
        required: '비밀번호를 적어주세요',
        minLength: {
            value: 6,
            message: '6글자가 넘어야 합니다.',
        },
    };

    const userPhoneNumber = {
        required: '핸드폰 번호를 적어주세요',
        minLength: {
            value: 11,
            message: '11글자가 넘어야 합니다.',
        },
    };

    return (
        <S.Signup>
            <S.SignupDiv>
                <h1>회원가입</h1>
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
                        <label htmlFor="name">nickname</label>
                        <input
                            type="text"
                            id="name"
                            {...register('name', userName)}
                        ></input>
                        {formState.errors.name?.message !== undefined
                            ? `${formState.errors.name?.message}`
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
                        <label htmlFor="passwordConfirm">
                            password confirm
                        </label>
                        <input
                            type="password"
                            id="passwordConfirm"
                            {...register('passwordConfirm', userPassword)}
                        ></input>
                        {formState.errors.passwordConfirm?.message !== undefined
                            ? `${formState.errors.passwordConfirm?.message}`
                            : ''}
                    </S.FormDiv>
                    <S.FormDiv>
                        <label htmlFor="phoneNumber">phone number</label>
                        <input
                            type="number"
                            id="phoneNumber"
                            {...register('phoneNumber', userPhoneNumber)}
                        ></input>
                        {formState.errors.phoneNumber?.message !== undefined
                            ? `${formState.errors.phoneNumber?.message}`
                            : ''}
                    </S.FormDiv>
                    <S.FormDiv>
                        <button type="submit">회원가입</button>
                    </S.FormDiv>
                    <S.SignupP>
                        아이디가 있다면?
                        <Link href="/login">
                            <span>로그인</span>
                        </Link>
                    </S.SignupP>
                </form>
            </S.SignupDiv>
        </S.Signup>
    );
};

export default Signup;
