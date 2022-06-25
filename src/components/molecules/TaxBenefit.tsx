import classNames from 'classnames/bind';
import React from 'react';

import { savingMetaList } from '../../common/env';

import containerStyles from '@/layout/ContainerGroup.module.scss';
import formStyles from '@/molecules/FormGroup.module.scss';

interface TaxBenefitProps {
    logo: string;
    title: string;
    amount?: number;
}

const TaxBenefitData:React.FC<TaxBenefitProps> = ({ logo, title, amount }) =>
{
	const cn = classNames.bind(containerStyles);
	const fn = classNames.bind(formStyles);

	return (
		<section className={fn('form-with-shadow')}>
			<section className={cn('container-between')}>
				<img alt='pension' className={cn('logo')} src={logo} />
				<p>{title}</p>
				<p>{amount}</p>
			</section>
		</section>
	);
};

const TaxBenefitList:React.FC = () =>
{
	const renderData = savingMetaList.map(({ logo, title }, i:number) => (
		<TaxBenefitData amount={135000} key={i} logo={logo} title={title} />
	));
	return <>{renderData}</>;
};

export default TaxBenefitList;