import type { NextPage } from 'next';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getInAndOutMonthly } from 'src/api/in&out';

import { AssetData } from '@/types/molecules/AssetProps';
import IncomesView from '@/views/Incomes';

const months = Array.from({ length: 12 }, (v, i) => i + 1);

const ExpenseManagement:NextPage = ({ dataList }: InferGetServerSidePropsType<typeof getServerSideProps>) => <IncomesView asset={dataList} />;

const getDataList = (monthly: any, e: number) =>
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
	const dataList:AssetData[] = [];

	for (const e of months)
	{
		if (e < 10)
		{
			const one = await getInAndOutMonthly(`0${e}`);
			dataList.push(...getDataList(one, e));
		}
		else
		{
			const two = await getInAndOutMonthly(`${e}`);
			dataList.push(...getDataList(two, e));
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