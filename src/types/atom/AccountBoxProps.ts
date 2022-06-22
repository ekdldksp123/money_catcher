/**
 * 계정 박스 타입 모듈
 *
 * @author RWB
 * @since 2022.06.21 Tue 00:59:14
 */

// import { HTMLAttributes, AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
// type T = keyof HTMLAttributes<AnchorHTMLAttributes<any>>;

export interface AccountBoxProps extends HTMLAnchorElement
{
	hasLogin?: boolean
}