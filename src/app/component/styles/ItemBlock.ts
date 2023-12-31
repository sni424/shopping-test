'use client';

import styled from 'styled-components';

type HeartProps = {
    isTrue: boolean;
};

export const BoxDiv = styled.div`
    width: 300px;
    height: 320px;
    background-color: #d2cbc2;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    margin: 2rem auto;
`;

export const MarginDiv = styled.div`
    width: 90%;
    height: 90%;
    margin: 0 auto;
    position: relative;
`;
export const TopInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const Discount = styled.span`
    background-color: #666666;
    color: white;
    font-size: 0.8rem;
    padding: 5px 15px;
    border-radius: 5px;
`;

export const Heart = styled.span<HeartProps>`
    color: ${({ isTrue }) => (isTrue ? 'red' : 'white')};
    font-size: 30px;
    font-weight: 800;
    cursor: pointer;
`;
export const Image = styled.figure`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 180px;
`;

export const GoodsName = styled.div`
    text-align: center;
    width: 270px;
    height: 26px;
    color: #787775;
    font-size: 1.2rem;
    font-weight: 800;
    overflow: hidden;
    text-overflow: ellipsis;
`;
export const Price = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    li {
        list-style: none;
        font-weight: 800;
    }
`;

export const AbsolDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 2.1rem;
`;

export const Cicle = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: #f5f5f5;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
`;
