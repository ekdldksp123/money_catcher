/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

import { Item } from '@/types/HeaderProps';

const items: Item[] = [
	{ name: 'My 지출 관리', path: '/ji' },
	{ name: 'My 저축 관리', path: '/ju' },
	{ name: 'My 구독 관리', path: '/gu' }
];

const NavBar:React.FC = () => (
	<nav css={menu}>
		<Logo>Show Me The Money</Logo>
		<ul css={header}>
			{items.map((v, i) => <li css={item} key={i}>{v.name}</li>)}
		</ul>
		<div>로그인 / 회원가입</div>
	</nav>
);

export default NavBar;

const menu = css`
    position: fixed;
    top: 0;
    margin: 0;
    padding: 10px;
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 3px tomato;
`;

const header = css`
    background-color: #fff;
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const item = css`
    display: inline;
    padding-right: 20px;
    padding-left: 20px;
`;

const Logo = styled.h1`
    color: #24A0ED;
`;