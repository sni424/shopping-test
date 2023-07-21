import styled from 'styled-components';

export const PageName = styled.span`
    font-size: 2rem;
    font-weight: 800;
    color: #2d2b3f;
`;

export const CartDiv = styled.div`
    height: 100%;
    width: 90%;
    margin: 2rem auto;
`;

export const CartBox = styled.div`
    width: 100%;
    height: 180px;
    background-color: #aeabbc;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
`;

export const Image = styled.figure`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 4rem;
`;

export const ProductName = styled.span`
    margin: 0 2rem;
    color: black;
    font-weight: 800;
    width: 100%;
`;

export const InfoDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 100%;
    text-align: center;
`;
export const Category = styled.p``;
export const Price = styled.p``;
export const Stock = styled.p``;
export const Count = styled.p``;

export const BtnDiv = styled.div`
    width: 40%;
    margin: 0 auto;
    margin-left: 1rem;
`;

export const CenterDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Btn = styled.button`
    font-size: 1.1rem;
    padding: 0.3rem 1.5rem;
    margin: 0.2rem auto;
    text-align: center;
    border-radius: 5px;
    transition: all 0.2s;
    border: none;
    &:hover {
        box-shadow: 0px 0px 0px 5px #21825b;
    }
`;
