/**
 * 헤더 컴포넌트
 *
 * @author punchlips97
 * @since 2022.06.22 Tue 01:00:00
 */

import classNames from 'classnames/bind';
import React from 'react';
import { FaHome } from 'react-icons/fa';
import { MdLogin } from 'react-icons/md';
import { useRecoilValue } from 'recoil';
import { title } from 'src/common/env';
import { userAtom } from 'src/common/state';

import styles from './Header.module.scss';

import AccountBox from '@/atom/AccountBox';
import MobileNav from '@/atom/MobileNav';
import { Item } from '@/types/layout/HeaderProps';

const AnonyMenuList: Item[] = [
	{
		icon: <FaHome />,
		name: '홈',
		path: '/'
	},
	{
		icon: <MdLogin />,
		name: '로그인',
		path: '/login'
	}
];

const userMenuList: Item[] = [
	{
		icon: <FaHome />,
		name: '홈',
		path: '/'
	},
	{
		icon: <FaHome />,
		name: 'My 지출 관리',
		path: '/incomes'
	},
	{
		icon: <FaHome />,
		name: 'My 저축 관리',
		path: '/savings'
	},
	{
		icon: <FaHome />,
		name: 'My 구독 관리',
		path: '/subscriptions'
	}
];

/**
 * 헤더 컴포넌트 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export default function Header(): JSX.Element
{
	const cn = classNames.bind(styles);
	const userState = useRecoilValue(userAtom);

	return (
		<nav className={cn('menu')}>
			<span className={cn('logo')}>{title}</span>

			<div className={cn('wrapper')}>
				<AccountBox user={userState} />
				<MobileNav menuList={userState ? userMenuList : AnonyMenuList} />
			</div>
		</nav>
	);
}