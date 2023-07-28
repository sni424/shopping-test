import styled from 'styled-components';

export const PopupDiv = styled.div`
    position: absolute;
    width: 160px;
    height: 100px;
    font-size: 1.2rem;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    right: 8rem;
    top: -1rem;
`;

export const PopupUl = styled.ul`
    width: 100%;
    text-align: center;
    li {
        list-style: none;
        margin: 1rem auto;
        &:hover {
            cursor: pointer;
        }
    }
`;

export const LineDiv = styled.div`
    width: 80%;
    height: 0.1px;
    background-color: black;
    margin: 0 auto;
`;
