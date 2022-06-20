/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React from 'react';

import { Item } from '@/types/HeaderProps';

const items: Item[] = [
	{ name: 'My 지출 관리', path: '/ji' },
	{ name: 'My 저축 관리', path: '/ju' },
	{ name: 'My 구독 관리', path: '/gu' }
];

const NavBar:React.FC = () =>
{
	const router = useRouter();
	const navigate = (path:string) => router.push({ pathname: path });

	return (
		<nav css={menu}>
			<Logo onClick={() => navigate('/')}>Show Me The Money</Logo>
			<ul css={header}>
				{items.map((v, i) => <li css={item} key={i}>{v.name}</li>)}
			</ul>
			<div css={account}>
				<section onClick={() => navigate('/login')}>로그인</section>
				<section> / </section>
				<section onClick={() => navigate('/signup')}>회원가입</section>
			</div>
		</nav>
	);
};

export default NavBar;

const menu = css`
    position: fixed;
    top: 0;
    margin: 0;
    padding-right: 25px;
    padding-left: 25px;
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
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
    color: #808080;

    &:hover {
        cursor: pointer;
    }
`;

const Logo = styled.h1`
    color: #24CAEA;
    &:hover {
        cursor: pointer;
    }
`;

const account = css`
    & section {
        display: inline;
        color: #808080;
    }
    & section:hover {
        cursor: pointer;
    }
`;