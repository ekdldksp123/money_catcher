/**
 * 공통 훅 모듈
 *
 * @author RWB
 * @since 2022.06.20 Mon 22:37:47
 */

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { User } from './env';

/**
 * 권한 훅 메서드
 *
 * @param {User} user: User 객체
 * @param {boolean} flag: 권한 유무 여부
 * @param {string} url: 이동 대상 URL
 */
export function useAuth(user: User, flag: boolean, url: string = '/login'): void
{
	const router = useRouter();

	useEffect(() =>
	{
		// 유저 정보가 권한 유무와 같을 경우
		if ((user === undefined) === !flag)
		{
			router.push(url);
		}
	}, []);
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

			let script = document.querySelector(`script[src="${src}"]`);

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