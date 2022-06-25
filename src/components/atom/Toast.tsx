/**
 * 토스트 컴포넌트
 *
 * @author RWB
 * @since 2022.06.25 Sat 17:20:11
 */

import classNames from 'classnames/bind';
import { FaCheckCircle, FaInfoCircle } from 'react-icons/fa';
import { MdError, MdWarning } from 'react-icons/md';

import styles from './Toast.module.scss';

import { ToastProps } from '@/types/atom/ToastProps';

/**
 * 토스트 컴포넌트 JSX 반환 메서드
 *
 * @param {ToastProps} param0: ToastProps 객체
 *
 * @returns {JSX.Element} JSX
 */
export default function Toast({ isShow, title, type = 'info', children }: ToastProps): JSX.Element
{
	const cn = classNames.bind(styles);

	return (
		<div className={cn('toast', `type-${type}`, isShow ? 'show' : undefined)}>
			<div className={cn('toast-icon')}>
				{type === 'success' ? <FaCheckCircle color='limegreen' size={32} /> : null}
				{type === 'warn' ? <MdWarning color='orange' size={32} /> : null}
				{type === 'error' ? <MdError color='crimson' size={32} /> : null}
				{type === 'info' ? <FaInfoCircle color='dodgerblue' size={32} /> : null}
			</div>

			<div className={cn('toast-body')}>
				<h3 className={cn('toast-title', `type-${type}`)}>{title}</h3>
				<div className={cn('toast-content')}>{children}</div>
			</div>
		</div>
	);
}