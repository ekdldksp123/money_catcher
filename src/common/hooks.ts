/**
 * 공통 훅 모듈
 *
 * @author RWB
 * @since 2022.06.20 Mon 22:37:47
 */

import { useEffect, useState } from 'react';

import { refWidth } from './env';

/**
 * 반응형 여부 반환 훅 메서드
 * - true: 데스크탑
 * - false: 모바일
 *
 * @param {number} ref: 기준 너비
 *
 * @returns {boolean} 반응형 여부
 */
export function useSemanticHook(width: number = refWidth): boolean
{
	const [ state, setState ] = useState(true);

	useEffect(() => {
		const handler = () => setState(window.innerWidth >= width);
		window.addEventListener('resize', handler);

		handler();

		return () => window.removeEventListener('resize', handler);
	}, []);

	return state;
}