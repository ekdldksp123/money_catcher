import classNames from 'classnames/bind';
import React from 'react';
import { RecommendedData, TaxRecommendation } from 'src/api/mytax_recommenation';

import Chart from '@/atom/Chart';
import CustomProgress from '@/atom/CustomProgressBar';
import Banner from '@/layout/Banner';
import containerStyles from '@/layout/ContainerGroup.module.scss';
import formStyles from '@/molecules/FormGroup.module.scss';
import TaxBenefit from '@/molecules/TaxBenefit';
import { ChartData } from '@/types/atom/ChartProps';
import { SavingsProps } from '@/types/atom/TaxBenefitsProps';

const SavingsView:React.FC<SavingsProps> = ({ data }) =>
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
				<TaxBenefit data={data} />
			</section>
			<section>
				<h1 className={fn('label')}>맞춤형 세금공제 추천</h1>
				{RecommendedData.map((v: TaxRecommendation, i:number) => (
					<RecommendationRow
						companyName={v.financial_company_name}
						key={i}
						limit={v.limit}
						productName={v.product_name}
						tax={v.tax}
						taxType={v.tax_type}
					/>
				))}
			</section>
		</section>
	);
};

export default SavingsView;

interface Props {
	companyName:string;
	limit: number;
	productName: string;
	tax: number;
	taxType: string;
}

const RecommendationRow:React.FC<Props> = ({ companyName, limit, productName, taxType, tax }) =>
{
	const cn = classNames.bind(containerStyles);
	const fn = classNames.bind(formStyles);

	return (
		<section className={fn('form-with-shadow')}>
			<section className={cn('container-between')}>
				<p>{`${productName}(${companyName})`}</p>
				<p>{taxType}</p>
				<p>{`수수료: ${tax} %`}</p>
				<p>{`(최대 혜택: ${limit})`}</p>
			</section>
		</section>
	);
};