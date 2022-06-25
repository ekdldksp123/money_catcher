/**
 * 버튼 컴포넌트
 *
 * @author RWB
 * @since 2022.06.22 Wed 01:26:29
 */

import classNames from 'classnames/bind';

import styles from './Button.module.scss';

import { ButtonProps } from '@/types/atom/ButtonProps';

/**
 * 버튼 컴포넌트 JSX 반환 메서드
 *
 * @param {ButtonProps} param0: ButtonProps 객체
 *
 * @returns {JSX.Element} JSX
 */
export default function Button({ border = 'basic', color = 'basic', outline, className, ...props }: ButtonProps): JSX.Element
{
	const cn = classNames.bind(styles);

	return (
		<button className={cn('button', `border-${border}`, `color-${color}`, outline ? 'outline' : undefined, className)} {...props} />
	);
}