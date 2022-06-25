import { baseApi } from 'src/common/env';

import { InAndOutData } from '@/types/molecules/AssetProps';

/**
 * @author vinchaekim
 * @since 2022.06.25
 */

export const getInAndOutMonthly = async (month: string): Promise<InAndOutData | null> =>
{
	const apiUrl = `${baseApi}/assets/date/2021${month}`;
	const response = await fetch(apiUrl, { method: 'GET' });
	const json = await response.json();

	if (response.ok) return json;

	return null;
};