import type { NextPage } from 'next';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getInAndOutMonthly } from 'src/api/in&out';

import { AssetData, InAndOutData } from '@/types/molecules/AssetProps';
import IncomesView from '@/views/Incomes';

const ExpenseManagement:NextPage = ({ dataList }: InferGetServerSidePropsType<typeof getServerSideProps>) => <IncomesView asset={dataList} />;

const getDataList = (monthly: InAndOutData, e: number) =>
{
	const incomeKeyVal = Object.entries(monthly.incomeMap)
		.map(([ key, value ]) => ({ key, value }));
	const spendKeyVal = Object.entries(monthly.spendingMap)
		.map(([ key, value ]) => ({ key, value }));

	const incomeData: AssetData = {
		data: incomeKeyVal,
		month: e,
		type: 'income'
	};

	const spendData: AssetData = {
		data: spendKeyVal,
		month: e,
		type: 'spend'
	};

	return [ incomeData, spendData ];
};

export const getServerSideProps:GetServerSideProps = async () =>
{
	const dataList: AssetData[] = [];

	for (let i = 1; i <= 12; i++)
	{
		const response = await getInAndOutMonthly(i > 9 ? i : `0${i}`);

		if (response !== null)
		{
			const assert = getDataList(response, i);

			dataList.push([ ...assert ]);
		}
	}

	if (dataList.length === 0)
	{
		return {
			redirect: {
				destination: '/',
				permanent: false
			}
		};
	}
	return { props: { dataList } };
};

export default ExpenseManagement;