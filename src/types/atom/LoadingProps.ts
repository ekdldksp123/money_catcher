/**
 * 로딩 타입 모듈
 *
 * @author RWB
 * @since 2022.06.21 Tue 01:23:10
 */

import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface LoadingProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
{
	hasLoading?: boolean
}