/**
 * 모바일 네비게이션 컴포넌트
 *
 * @author RWB
 * @since 2022.06.20 Mon 23:17:58
 */

import classNames from 'classnames/bind';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';

import styles from './MobileNav.module.scss';

import { NavProps } from '@/types/atom/NavProps';

/**
 * 모바일 네비게이션 JSX 반환 메서드
 *
 * @param {NavProps} param0: NavProps 객체
 *
 * @returns {JSX.Element} JSX
 */
export default function MobileNav({ menuList, className, ...props }: NavProps): JSX.Element
{
	const router = useRouter();
	const cn = classNames.bind(styles);

	const [ isOpen, setOpen ] = useState(undefined as boolean | undefined);

	const handleClose = () => setOpen(false);

	useEffect(() => router.events.on('routeChangeComplete', handleClose), []);

	const menu = menuList.map(({ icon, name, path }, index) => (
		<Link href={path} key={`mobile-nav-item-${index}`} passHref>
			<a className={cn('link', router?.pathname === path && 'active')} href='#replace'>
				<span>{icon}</span>
				<span>{name}</span>
			</a>
		</Link>
	));

	return (
		<>
			<button
				className={cn('switch', isOpen !== undefined && isOpen ? 'open' : 'close')}
				onClick={() => setOpen(!isOpen)}
			>
				{isOpen ? <IoCloseOutline className={cn('hamburger')} color='#00c8ff' size={24} /> : <IoMenuOutline className={cn('hamburger')} color='#00c8ff' size={24} />}
			</button>

			<aside className={cn('sidebar', isOpen !== undefined && (isOpen ? 'open' : 'close'), className)} {...props}>
				<nav className={cn('mobile-nav')}>{menu}</nav>
			</aside>

			{isOpen ? <aside className={cn('sidebar-wrapper')} onClick={handleClose} /> : null}
		</>
	);
}