/**
 * 스크린 컴포넌트
 *
 * @author RWB
 * @since 2022.06.25 Sat 14:55:35
 */

import classNames from 'classnames/bind';
import { HTMLAttributes, DetailedHTMLProps } from 'react';

import styles from './Screen.module.scss';

/**
 * 스크린 컴포넌트 JSX 반환 메서드
 *
 * @param {DetailedHTMLProps} param0: DetailedHTMLProps 객체
 *
 * @returns {JSX.Element} JSX
 */
export default function Screen({ className, children, ...props }: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>): JSX.Element
{
	const cn = classNames.bind(styles);

	return (
		<article className={cn(className, 'screen')} {...props}>{children}</article>
	);
}