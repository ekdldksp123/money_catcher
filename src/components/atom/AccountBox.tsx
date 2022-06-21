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

export default function AccountBox({ hasLogin, className, ...props }: AccountBoxProps): JSX.Element
{
	const cn = classNames.bind(styles);

	return (
		<Link href={hasLogin ? '/mypage' : '/login'} passHref>
			<a className={cn('account-box', className)} href='#replace' {...props}>
				{hasLogin ? <img alt='account' className={cn('image')} src='http://via.placeholder.com/50x50' /> : <FaUser />}
				{hasLogin ? '테스트' : '로그인'}
			</a>
		</Link>
	);
}