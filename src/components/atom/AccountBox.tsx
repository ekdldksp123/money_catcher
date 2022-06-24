/**
 * 계정 박스 컴포넌트
 *
 * @author RWB
 * @since 2022.06.21 Tue 00:57:16
 */

import classNames from 'classnames/bind';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';

import styles from './AccountBox.module.scss';

import { AccountBoxProps } from '@/types/atom/AccountBoxProps';

/**
 * 계정 박스 컴포넌트 JSX 반환 메서드
 *
 * @param {AccountBoxProps} param0: AccountBoxProps
 *
 * @returns {JSX.Element} JSX
 */
export default function AccountBox({ user, className, ...props }: AccountBoxProps): JSX.Element
{
	const cn = classNames.bind(styles);

	return (
		<Link href={user ? '/mypage' : '/login'} passHref>
			<a className={cn('account-box', className)} href='#replace' {...props}>
				{user ? <img alt='account' className={cn('image')} src={user.avatar} /> : <FaUser />}
			</a>
		</Link>
	);
}