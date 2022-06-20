/**
 * 데스크탑 네비게이션 컴포넌트
 *
 * @author RWB
 * @since 2022.06.20 Mon 22:19:58
 */

import classNames from 'classnames/bind';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './DesktopNav.module.scss';

import { NavProps } from '@/types/atom/NavProps';

/**
 * 데스크탑 네비게이션 JSX 반환 메서드
 *
 * @param {NavProps} param0: NavProps 객체
 *
 * @returns {JSX.Element} JSX
 */
export default function DesktopNav({ menuList, className, ...props }: NavProps): JSX.Element
{
	const { pathname } = useRouter();
	const cn = classNames.bind(styles);

	const menu = menuList.map(({ name, path }, index) => (
		<Link href={path} key={`desktop-nav-item-${index}`} passHref>
			<a className={cn('link', pathname === path && 'active')} href='#replace'>{name}</a>
		</Link>
	));

	return <nav className={cn('desktop-nav', className)} {...props}>{menu}</nav>;
}