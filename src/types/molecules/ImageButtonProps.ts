/**
 * 이미지 버튼 타입 모듈
 *
 * @author RWB
 * @since 2022.06.22 Wed 02:50:28
 */

import { ButtonProps } from '../atom/ButtonProps';

export interface ImageButtonProps extends ButtonProps
{
	image?: string
}