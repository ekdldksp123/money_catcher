import classNames from 'classnames/bind';
import React from 'react';

import Chart from '@/atom/Chart';
import CustomProgress from '@/atom/CustomProgressBar';
import Banner from '@/layout/Banner';
import containerStyles from '@/layout/ContainerGroup.module.scss';
import formStyles from '@/molecules/FormGroup.module.scss';
import TaxBenefit from '@/molecules/TaxBenefit';
import { ChartData } from '@/types/atom/ChartProps';

const SavingsView:React.FC = () =>
{
	const cn = classNames.bind(containerStyles);
	const fn = classNames.bind(formStyles);

	const chartDatas = [
		{
			amount: 15000000, institution: '국민', name: '적금'
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
			<Banner title='저축 관리' />
			<section className={cn('container-content')}>
				<section className={fn('form-with-shadow')}>
					<Chart props={chartDatas} />
					<CustomProgress amount={30000000} assetType='투자' />
					<CustomProgress amount={25000000} assetType='ISA' />
					<CustomProgress amount={20000000} assetType='주택청약' />
					<CustomProgress amount={15000000} assetType='적금' />
				</section>
			</section>
			<section>
				<h1 className={fn('label')}>올해 받은 세액혜택</h1>
				<TaxBenefit />
			</section>
			<section>
				<h1 className={fn('label')}>맞춤형 세금공제 추천</h1>
				<section className={fn('form-with-shadow')}>
					<>요기는 시간 남으면!!!</>
				</section>
			</section>
		</section>
	);
};

export default SavingsView;