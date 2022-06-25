/**
 * 버튼 타입 모듈
 *
 * @author RWB
 * @since 2022.06.22 Wed 01:27:18
 */

import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export type ButtonBorder = 'basic' | 'round' | 'circle'
export type ButtonColor = 'basic' | 'primary' | 'secondary' | 'submit' | 'info' | 'warn' | 'error' | 'negative'

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
{
	border?: ButtonBorder
	color?: ButtonColor
	outline?: boolean
}