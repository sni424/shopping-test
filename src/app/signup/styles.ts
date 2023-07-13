'use client';

import styled from 'styled-components';

export const Signup = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 400px;
    margin: 0 auto;
    margin-top: 5rem;
    text-align: center;
`;

export const SignupDiv = styled.div`
    padding: 6px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
`;

export const FormDiv = styled.div`
    padding: 7px 16px;
    text-align: start;
    label {
        font-weight: 600;
        color: black;
    }
    input {
        width: 100%;
        background-color: white;
        border-radius: 5px;
        font-size: 1.3rem;
        margin-top: 0.8rem;
        border: 1px solid #aeabbc;
        padding: 0.5rem 0.5rem;
    }
    button {
        text-align: center;
        background-color: black;
        color: white;
        padding: 0.5rem 0.8rem;
        width: 100%;
        border: none;
        font-size: 1.1rem;
        border-radius: 5px;
        margin: 1rem 0;
        &:hover {
            cursor: pointer;
            background-color: gray;
            /* font-weight: 700; */
            transition-duration: 700ms;
        }
    }
`;

export const SignupP = styled.p`
    font-size: 0.8rem;
    margin-bottom: 1rem;
    a {
        color: black;
        text-decoration: none;
    }
    span {
        font-weight: 800;
        font-size: 0.9rem;
        &:hover {
            cursor: pointer;
        }
    }
`;
