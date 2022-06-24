/**
 * 환경변수 모듈
 *
 * @author RWB
 * @since 2022.06.20 Mon 23:16:18
 */

export type GenderType = 'Male' | 'Female' | 'Unknown';
export type AddressType = '서울' | '경기도' | '강원도' | '경상도';

export interface User
{
	address: AddressType
	avatar: string
	birthYear: number
	gender: GenderType
	id: string
	name: string
	password: string
}

// 반응성 기준 길이
export const refWidth = 900;

export const title = 'Show Me The Money';

export const user: User = {
	address: '서울',
	avatar: 'https://i.pinimg.com/originals/e4/59/7c/e4597c310d9b39e749cf0157d43763fb.jpg',
	birthYear: 2000,
	gender: 'Unknown',
	id: 'test',
	name: '테스트',
	password: 'test1234'
};