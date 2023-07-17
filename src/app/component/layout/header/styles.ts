'use client';

import styled from 'styled-components';

export const HeaderDiv = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 2rem;
`;
export const BrandName = styled.span`
    font-size: 2rem;
    font-weight: 800;
    color: #2d2b3f;
    a {
        text-decoration: none;
        color: #2d2b3f;
    }
    &:hover {
        cursor: pointer;
    }
`;

export const FelxDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const HeaderMenu = styled.ul`
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    color: #aeabbc;
    a {
        text-decoration: none;
        color: #aeabbc;
    }
`;

export const IconUl = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    text-align: none;
`;

export const Li = styled.div`
    list-style: none;
    margin-left: 15px;
    &:hover {
        cursor: pointer;
        color: black;
        font-weight: 800;
    }
`;
