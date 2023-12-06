import React from 'react';
import styled from 'styled-components';
import HeaderMenuList from './HeaderMenuList';

const Box = styled.div`
    display: flex;

`;

const HeaderMenu: React.FC<{currentUrl: string}> = (props) => {
    return (
        <Box>
            <HeaderMenuList currentUrl = {props.currentUrl} link='/'>둘러보기</HeaderMenuList>
            <HeaderMenuList currentUrl = {props.currentUrl} link='/search'>검색</HeaderMenuList>
            <HeaderMenuList currentUrl = {props.currentUrl} link='/review'>후기</HeaderMenuList>
            <HeaderMenuList currentUrl = {props.currentUrl} link='/community'>커뮤니티</HeaderMenuList>
        </Box>
    )
}

export default HeaderMenu;