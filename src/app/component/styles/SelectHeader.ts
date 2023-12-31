import styled from 'styled-components';

interface StyledButtonProps {
    isSelected: boolean;
}

export const MainHome = styled.div`
    margin-top: 1.5rem;
    width: 100%;
    display: flex;
`;

export const PageName = styled.span`
    font-size: 2rem;
    font-weight: 800;
    color: #2d2b3f;
`;

export const MenuBar = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;
    width: 100%;
`;

export const GenderSelect = styled.ul`
    display: flex;
    list-style: none;

    li {
        margin-left: 2rem;
        padding: 0.7rem 3rem;
        border-radius: 2rem;
        &:hover {
            cursor: pointer;
            background-color: #456aea;
            color: white;
        }
    }
`;

export const SelectLi = styled.li<StyledButtonProps>`
    background-color: ${({ isSelected }) =>
        isSelected ? '#456aea' : '#f5f5f5'};
    color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
`;

export const IconUl = styled.ul`
    display: flex;
    list-style: none;
    li {
        margin-left: 2rem;
        padding: 0.5rem 1.5rem;
        border-radius: 2rem;
        background-color: #f5f5f5;
        text-align: center;
        display: flex;
        align-items: center;
        &:hover {
            cursor: pointer;
            background-color: #456aea;
            color: white;
        }
    }
`;
