import classNames from 'classnames/bind';
import React from 'react';

import { savingMetaList } from '../../common/env';

import containerStyles from '@/layout/ContainerGroup.module.scss';
import formStyles from '@/molecules/FormGroup.module.scss';
import { SavingsProps } from '@/types/atom/TaxBenefitsProps';

interface Props {
    logo: string;
    title: string;
    amount: number;
	max: number;
}

const TaxBenefitData:React.FC<Props> = ({ logo, title, amount, max }) =>
{
	const cn = classNames.bind(containerStyles);
	const fn = classNames.bind(formStyles);

	return (
		<section className={fn('form-with-shadow')}>
			<section className={cn('custom-between')}>
				<img alt='pension' className={cn('logo', 'width1')} src={logo} />
				<p align='center' className={cn('width3')}>{title}</p>
				<p className={cn('width3')}>{amount.toLocaleString('ko-KR')}</p>
				<p className={cn('width2')}>{`(최대 공제 가능: ${max.toLocaleString('ko-KR')})`}</p>
			</section>
		</section>
	);
};

const TaxBenefitList:React.FC<SavingsProps> = ({ data }) =>
{
	const renderData = savingMetaList.map(({ logo, title }, i:number) =>
	{
		switch (title)
		{
		case '연금': return <TaxBenefitData amount={data.pensionAmounts} key={i} logo={logo} max={data.pensionDeduction} title={title} />;
		case '주택': return <TaxBenefitData amount={data.housingAmounts} key={i} logo={logo} max={data.housingDeduction} title={title} />;
		case '보험': return <TaxBenefitData amount={data.insureAmounts} key={i} logo={logo} max={data.insureDeduction} title={title} />;
		case '의료': return <TaxBenefitData amount={data.medicalAmounts} key={i} logo={logo} max={data.medicalDeduction} title={title} />;
		case '신용카드': return <TaxBenefitData amount={data.creditAmounts} key={i} logo={logo} max={data.creditDeduction} title={title} />;
		case '기부': return <TaxBenefitData amount={data.donationAmounts} key={i} logo={logo} max={data.donationDeduction} title={title} />;
		case '교육': return <TaxBenefitData amount={data.educationAmounts} key={i} logo={logo} max={data.educationDeduction} title={title} />;
		case '월세': return <TaxBenefitData amount={data.leasAmounts} key={i} logo={logo} max={data.leasDeduction} title={title} />;
		default: return null;
		}
	});
	return <>{renderData}</>;
};

export default TaxBenefitList;