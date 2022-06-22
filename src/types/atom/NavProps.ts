/**
 * 네비게이션 타입 모듈
 *
 * @author RWB
 * @since 2022.06.20 Mon 23:33:59
 */

import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { Item } from '../layout/HeaderProps';

export interface NavProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
{
	menuList: Item[]
}