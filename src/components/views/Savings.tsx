import classNames from 'classnames/bind';
import React from 'react';

import Chart from '@/atom/Chart';
import CustomProgress from '@/atom/CustomProgressBar';
import formStyles from '@/molecules/FormGroup.module.scss';
import { ChartData } from '@/types/atom/ChartProps';

const SavingsView:React.FC = () =>
{
	const fn = classNames.bind(formStyles);

	const chartDatas = [
		{
			amount: 10000000, institution: '국민', name: '적금'
		},
		{
			amount: 20000000, institution: '신한', name: '주택청약'
		},
		{
			amount: 25000000, institution: '미래에셋', name: 'ISA'
		},
		{
			amount: 30000000, institution: '키움', name: '투자'
		}
	] as ChartData[];

	return (
		<section className='page'>
			<h1 className={fn('title')}>저축 관리</h1>
			<Chart props={chartDatas} />
			<CustomProgress amount={25000000} assetType='ISA' />
		</section>
	);
};

export default SavingsView;