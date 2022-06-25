/**
 * 구독 API 모듈
 *
 * @author RWB
 * @since 2022.06.25 Sat 14:08:22
 */

import { baseApi } from 'src/common/env';

export interface CostProps
{
	cost: number
	subs: number
	created_at: string
	updated_at: string
}

const api = `${baseApi}/subscription`;

export default class SubscriptionsService
{
	async getCost(year: number, month: number): Promise<CostProps>
	{
		const response = await fetch(`${api}/${year}/${month}/cost`, { method: 'GET' });
		const json = await response.json();

		if (response.ok)
		{
			return json;
		}

		return { code: response.status };
	}
}