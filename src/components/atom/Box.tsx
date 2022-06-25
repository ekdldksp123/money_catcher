/**
 * 박스 컴포넌트
 *
 * @author RWB
 * @since 2022.06.25 Sat 16:46:32
 */

import classNames from 'classnames/bind';
import { HTMLAttributes, DetailedHTMLProps } from 'react';

import styles from './Box.module.scss';

/**
 * 박스 컴포넌트 JSX 반환 메서드
 *
 * @param {DetailedHTMLProps} param0: DetailedHTMLProps 객체
 *
 * @returns {JSX.Element} JSX
 */
export default function Box({ className, ...props }: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>): JSX.Element
{
	const cn = classNames.bind(styles);

	return (
		<div className={cn(className, 'box')} {...props} />
	);
}