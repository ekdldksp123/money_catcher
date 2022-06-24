/**
 * 상태 모듈
 *
 * @author RWB
 * @since 2022.06.24 Fri 21:17:53
 */

import { atom } from 'recoil';

import { User } from './env';

export const userAtom = atom<User | undefined>({
	default: undefined,
	key: 'userState'
});