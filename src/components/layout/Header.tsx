/**
 * 헤더 컴포넌트
 *
 * @author punchlips97
 * @since 2022.06.22 Tue 01:00:00
 */

import classNames from 'classnames/bind';
import React from 'react';
import { BsCreditCardFill } from 'react-icons/bs';
import { FaHome, FaMoneyBillWave, FaUser } from 'react-icons/fa';
import { MdLogin, MdSavings } from 'react-icons/md';
import { useRecoilValue } from 'recoil';
import { meta } from 'src/common/env';
import { userAtom } from 'src/common/state';

import styles from './Header.module.scss';

import AccountBox from '@/atom/AccountBox';
import MobileNav from '@/atom/MobileNav';
import { Item } from '@/types/layout/HeaderProps';

const AnonyMenuList: Item[] = [
	{
		icon: <FaHome color='primay' />,
		name: '홈',
		path: '/'
	},
	{
		icon: <MdLogin color='primay' />,
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
		icon: <FaMoneyBillWave />,
		name: '지출 관리',
		path: '/incomes'
	},
	{
		icon: <MdSavings />,
		name: '저축 관리',
		path: '/savings'
	},
	{
		icon: <BsCreditCardFill />,
		name: '구독 관리',
		path: '/subscriptions'
	},
	{
		icon: <FaUser />,
		name: '마이페이지',
		path: '/mypage'
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

	const { title, logo } = meta;

	return (
		<nav className={cn('header')}>
			<div className={cn('wrapper')}>
				<img alt='logo' className={cn('logo')} src={logo} />
				<span className={cn('title')}>{title}</span>
			</div>

			<div className={cn('wrapper')}>
				<AccountBox user={userState} />
				<MobileNav menuList={userState ? userMenuList : AnonyMenuList} />
			</div>
		</nav>
	);
}