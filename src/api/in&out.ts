import { baseApi } from 'src/common/env';

/**
 * @author vinchaekim
 * @since 2022.06.25
 */

export const getInAndOutMonthly = async (month:string) =>
{
	const apiUrl = `${baseApi}/assets/date/2021${month}`;
	const response = await fetch(apiUrl, { method: 'GET' });
	console.dir(response);
	const json = await response.json();

	if (response.ok) return json;

	return { code: response.status };
};