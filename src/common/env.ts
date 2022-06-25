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

export const meta = {
	logo: 'https://user-images.githubusercontent.com/50317129/175574599-d7180a54-b519-44c7-b916-6a9c7b8435f9.png',
	title: '머니캐처'
};

export const savingMetaList = [
	{
		logo: 'https://user-images.githubusercontent.com/64599394/175760650-5e4038c9-8ed3-4a2d-8ac6-258fbb64b982.png',
		title: '연금'
	},
	{
		logo: 'https://user-images.githubusercontent.com/64599394/175760741-3de3ef82-ae1c-4211-8498-a61d881808b3.png',
		title: '주택청약'
	},
	{
		logo: 'https://user-images.githubusercontent.com/64599394/175761193-9220ef36-a8c2-4871-8874-b007729f5a9d.png',
		title: '보험'
	},
	{
		logo: 'https://user-images.githubusercontent.com/64599394/175761137-43bd5087-6f92-4e31-8f09-57f89227ff6e.png',
		title: '의료'
	},
	{
		logo: 'https://user-images.githubusercontent.com/64599394/175761406-d5c7e424-0b29-4764-be60-8d904d33c883.png',
		title: '신용카드'
	},
	{
		logo: 'https://user-images.githubusercontent.com/64599394/175761499-5ec10992-e63a-4769-a5cf-f31c8fd4a6c2.png',
		title: '기부'
	},
	{
		logo: 'https://user-images.githubusercontent.com/64599394/175761555-c99feeb4-10a3-492f-9b94-86b5623a8a55.png',
		title: '교육'
	},
	{
		logo: 'https://user-images.githubusercontent.com/64599394/175761694-f3cf6936-b548-4a1c-bea2-83242a17affa.png',
		title: '월세'
	}
];

export const educationMeta = {
	logo: 'https://user-images.githubusercontent.com/64599394/175761555-c99feeb4-10a3-492f-9b94-86b5623a8a55.png',
	title: '교육'
};

export const rentMeta = {
	logo: 'https://user-images.githubusercontent.com/64599394/175761694-f3cf6936-b548-4a1c-bea2-83242a17affa.png',
	title: '월세'
};

export const user: User = {
	address: '서울',
	avatar: 'https://i.pinimg.com/originals/e4/59/7c/e4597c310d9b39e749cf0157d43763fb.jpg',
	birthYear: 2000,
	gender: 'Unknown',
	id: 'test',
	name: '테스트',
	password: 'test1234'
};