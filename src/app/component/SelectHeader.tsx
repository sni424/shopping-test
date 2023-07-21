'use client';

import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { BsSearch, BsSliders2 } from 'react-icons/bs';

import * as S from './styles/SelectHeader';

interface Iprops {
    title: string;
    firstSearch?: string;
    secondSearch?: string;
    thirdSearch?: string;
    setDataValue: Dispatch<SetStateAction<string>>;
}

const SelectHeader = (props: Iprops) => {
    const { title, firstSearch, secondSearch, thirdSearch, setDataValue } =
        props;

    const [mainValue, setMainValue] = useState(firstSearch);

    const valueClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const clickedValue = e.currentTarget.id;
        setDataValue(clickedValue);
        setMainValue(clickedValue);
    };

    return (
        <S.MainHome>
            <S.PageName>{title}</S.PageName>
            <S.MenuBar>
                <S.GenderSelect>
                    <>
                        <S.SelectLi
                            isSelected={mainValue === firstSearch}
                            id={firstSearch}
                            onClick={valueClick}
                        >
                            {firstSearch}
                        </S.SelectLi>
                        <S.SelectLi
                            isSelected={mainValue === secondSearch}
                            id={secondSearch}
                            onClick={valueClick}
                        >
                            {secondSearch}
                        </S.SelectLi>
                        <S.SelectLi
                            isSelected={mainValue === thirdSearch}
                            id={thirdSearch}
                            onClick={valueClick}
                        >
                            {thirdSearch}
                        </S.SelectLi>
                    </>
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
    );
};

export default SelectHeader;
