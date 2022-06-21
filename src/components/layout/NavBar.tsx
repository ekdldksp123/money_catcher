/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { useSemanticHook } from 'src/common/hooks';

import AccountBox from '@/atom/AccountBox';
import DesktopNav from '@/atom/DesktopNav';
import MobileNav from '@/atom/MobileNav';
import { Item } from '@/types/HeaderProps';

const items: Item[] = [
	{ name: '홈', path: '/' },
	{ name: 'My 지출 관리', path: '/ji' },
	{ name: 'My 저축 관리', path: '/ju' },
	{ name: 'My 구독 관리', path: '/gu' }
];

const NavBar:React.FC = () =>
{
	const isSemantic = useSemanticHook();

	return (
		<nav css={menu}>
			<Logo>Show Me The Money</Logo>

			<div css={wrapper}>
				{isSemantic ? <DesktopNav menuList={items} /> : <MobileNav menuList={items} />}

				<AccountBox />
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
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px;
    background-color: white;
    z-index: 20;
`;

const wrapper = css`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const Logo = styled.h1`
    color: #24CAEA;
`;