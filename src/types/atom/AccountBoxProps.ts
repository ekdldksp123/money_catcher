/**
 * 계정 박스 타입 모듈
 *
 * @author RWB
 * @since 2022.06.21 Tue 00:59:14
 */

import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import { User } from 'src/common/env';

export interface AccountBoxProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
{
	user?: User
}