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
 * - true: 데스크탑, 태블릿
 * - false: 모바일
 *
 * @param {number} width : 기준 너비
 *
 * @returns {boolean} 반응형 여부
 */
export function useSemanticHook(width: number = refWidth): boolean
{
	const [ state, setState ] = useState(true);

	useEffect(() =>
	{
		const handler = () => setState(window.innerWidth >= width);

		window.addEventListener('resize', handler);

		handler();

		return () => window.removeEventListener('resize', handler);
	}, []);

	return state;
}

export const useScript = (src:string) =>
{
	const [ status, setStatus ] = useState<string>(src ? 'loading' : 'idle');

	useEffect(
		() =>
		{
			if (!src)
			{
				setStatus('idle');
				return;
			}

			let script:any = document.querySelector(`script[src="${src}"]`);

			if (!script)
			{
				script = document.createElement('script');
				script.src = src;
				script.async = true;
				script.setAttribute('data-status', 'loading');

				document.body.appendChild(script);

				const setAttributeFromEvent = (event:Event) =>
				{
					script.setAttribute(
						'data-status',
						event.type === 'load' ? 'ready' : 'error'
					);
				};

				script.addEventListener('load', setAttributeFromEvent);
				script.addEventListener('error', setAttributeFromEvent);
			}
			else
			{
				setStatus(script.getAttribute('data-status'));
			}

			const setStateFromEvent = (event: Event) =>
			{
				setStatus(event.type === 'load' ? 'ready' : 'error');
			};

			script.addEventListener('load', setStateFromEvent);
			script.addEventListener('error', setStateFromEvent);

			// eslint-disable-next-line consistent-return
			return () =>
			{
				if (script)
				{
					script.removeEventListener('load', setStateFromEvent);
					script.removeEventListener('error', setStateFromEvent);
				}
			};
		},
		[ src ]
	);
	return status;
};