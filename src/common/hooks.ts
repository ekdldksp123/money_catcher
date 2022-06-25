/**
 * 공통 훅 모듈
 *
 * @author RWB
 * @since 2022.06.20 Mon 22:37:47
 */

import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { User } from './env';

/**
 * 권한 훅 메서드
 *
 * @param {User} user: User 객체
 */
export function useAuth(user: User): void
{
	const router = useRouter();

	useEffect(() =>
	{
		// 유저 정보가 유효하지 않을 경우
		if (!user)
		{
			router.push('/login');
		}
	}, []);
}