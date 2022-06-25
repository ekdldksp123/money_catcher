/**
 * 토스트 타입 모듈
 *
 * @author RWB
 * @since 2022.06.25 Sat 15:40:23
 */

import { HTMLAttributes, DetailedHTMLProps } from 'react';

export type ToastType = 'success' | 'warn' | 'error' | 'info'

export interface ToastProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
{
	title: string
	isShow?: boolean
	type: ToastType
}