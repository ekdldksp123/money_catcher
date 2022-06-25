/**
 * 구독 API 모듈
 *
 * @author RWB
 * @since 2022.06.25 Sat 14:08:22
 */

import { useEffect, useState } from 'react';
import { baseApi } from 'src/common/env';

export interface CostProps
{
	cost: number
	subs: number
	created_at: string
	updated_at: string
}

export interface RecommendationProps
{
	type: string
	name: string
	cost: number
	usage: number
	created_at: string
	url: string
}

export interface EfficiencyProps
{
	type: string
	name: string
	goal: number
	usage: number
	efficiency: number
	cancel: boolean
	created_at: string
	updated_at: string
}

export interface SubscriptionPutRequestProps
{
	type: string
	name: string
	goal: number
	usage: number
}

export interface SubscriptionPutResponseProps
{
	type: string
	name: string
	usage: number
	created_at: string
	updated_at: string
}

const api = `${baseApi}/subscription`;

export default class SubscriptionsService
{
	/**
	 * 구독 총 금액 API 호출 결과 반환 비동기 메서드
	 *
	 * @param {number} year: 연도
	 * @param {number} month: 월
	 *
	 * @returns {Promise} 구독 총 금액 Promise 객체
	 */
	async getCost(year: number, month: number): Promise<CostProps | null>
	{
		const response = await fetch(`${api}/${year}/${month}/cost`);

		// 응답이 정상일 경우
		if (response.ok)
		{
			const json = await response.json();
			return json;
		}

		return null;
	}

	/**
	 * 구독 추천 API 호출 결과 반환 비동기 메서드
	 *
	 * @param {number} year: 연도
	 * @param {number} month: 월
	 *
	 * @returns {Promise} 구독 추천 Promise 객체
	 */
	async getRecommendation(year: number, month: number): Promise<RecommendationProps[]>
	{
		const response = await fetch(`${api}/${year}/${month}/recommend`);

		// 응답이 정상일 경우
		if (response.ok)
		{
			const json = await response.json();
			return json;
		}

		return [];
	}

	/**
	 * 구독 효율성 API 호출 결과 반환 비동기 메서드
	 *
	 * @param {number} year: 연도
	 * @param {number} month: 월
	 *
	 * @returns {Promise} 구독 효율성 Promise 객체
	 */
	async getEfficiency(year: number, month: number): Promise<EfficiencyProps[]>
	{
		const response = await fetch(`${api}/${year}/${month}/efficiency`);

		// 응답이 정상일 경우
		if (response.ok)
		{
			const json = await response.json();
			return json;
		}

		return [];
	}

	/**
	 * 구독 추가 API 호출 결과 반환 비동기 메서드
	 *
	 * @param {number} year: 연도
	 * @param {number} month: 월
	 * @param {SubscriptionPutRequestProps} body: SubscriptionPutRequestProps 객체
	 *
	 * @returns {Promise} 구독 추가 결과 Promise 객체
	 */
	async putSubscription(year: number, month: number, body: SubscriptionPutRequestProps): Promise<SubscriptionPutResponseProps | null>
	{
		const response = await fetch(`${api}/${year}/${month}`, {
			body: JSON.stringify(body),
			headers: { 'Content-Type': 'application/json' },
			method: 'PUT'
		});

		// 응답이 정상일 경우
		if (response.ok)
		{
			const json = await response.json();
			return json;
		}

		return null;
	}
}

/**
 * 구독 총 금액 API 호출 결과 반환 훅 메서드
 *
 * @param {number} year: 연도
 * @param {number} month: 월
 *
 * @returns {CostProps | null} 구독 총 금액
 */
export function useGetCost(year: number, month: number): CostProps | null
{
	const service = new SubscriptionsService();

	const [ state, setState ] = useState<CostProps | null>(null);

	useEffect(() =>
	{
		(async () =>
		{
			const response = await service.getCost(year, month);

			setState(response);
		})();
	}, [ year, month ]);

	return state;
}

/**
 * 구독 추천 API 호출 결과 반환 훅 메서드
 *
 * @param {number} year: 연도
 * @param {number} month: 월
 *
 * @returns {RecommendationProps[]} 구독 추천
 */
export function useGetRecommendation(year: number, month: number): RecommendationProps[]
{
	const service = new SubscriptionsService();

	const [ state, setState ] = useState<RecommendationProps[]>([]);

	useEffect(() =>
	{
		(async () =>
		{
			const response = await service.getRecommendation(year, month);

			setState(response);
		})();
	}, [ year, month ]);

	return state;
}

/**
 * 구독 효율성 API 호출 결과 반환 훅 메서드
 *
 * @param {number} year: 연도
 * @param {number} month: 월
 *
 * @returns {EfficiencyProps[]} 구독 효율성
 */
export function useGetEfficiency(year: number, month: number): EfficiencyProps[]
{
	const service = new SubscriptionsService();

	const [ state, setState ] = useState<EfficiencyProps[]>([]);

	useEffect(() =>
	{
		(async () =>
		{
			const response = await service.getEfficiency(year, month);

			setState(response);
		})();
	}, [ year, month ]);

	return state;
}