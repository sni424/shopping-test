'use client';

import styled from 'styled-components';

export const MainMenu = styled.div`
    height: 100%;
    width: 200px;
`;

export const MainUl = styled.ul`
    list-style: none;
    color: #aeabbc;
    a {
        color: #aeabbc;
        text-decoration: none;
    }
    li {
        margin-top: 2rem;
        &:hover {
            cursor: pointer;
            color: black;
            font-weight: 800;
        }
    }
`;
