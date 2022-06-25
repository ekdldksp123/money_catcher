import { baseApi } from 'src/common/env';

/**
 *
 * @author vinchaekim
 * @since 2022.06.26
 *
 */

export const getMyTaxData = async () =>
{
	const apiUrl = `${baseApi}/assets/mytax`;
	const response = await fetch(apiUrl, { method: 'GET' });
	const json = await response.json();

	if (response.ok) return json;

	return { code: response.status };
};