import React from 'react';
import { BsSearch, BsSliders2 } from 'react-icons/bs';

import * as S from './styles/SelectHeader';

interface Iprops {
    title: string;
    firstSearch?: string;
    secondSearch?: string;
    thirdSearch?: string;
}

const SelectHeader = (props: Iprops) => {
    const { title, firstSearch, secondSearch, thirdSearch } = props;

    return (
        <>
            <S.MainHome>
                <S.PageName>{title}</S.PageName>
                <S.MenuBar>
                    <S.GenderSelect>
                        <li>{firstSearch}</li>
                        <li>{secondSearch}</li>
                        <li>{thirdSearch}</li>
                    </S.GenderSelect>
                    <S.IconUl>
                        <li>
                            <BsSearch />
                        </li>
                        <li>
                            <BsSliders2 />
                        </li>
                    </S.IconUl>
                </S.MenuBar>
            </S.MainHome>
        </>
    );
};

export default SelectHeader;
