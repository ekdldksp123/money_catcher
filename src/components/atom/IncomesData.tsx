import classNames from 'classnames/bind';
import React from 'react';

import containerStyles from '@/layout/ContainerGroup.module.scss';
import formStyles from '@/molecules/FormGroup.module.scss';

interface MoneyFlowProps {
    type: string;
    amount: number;
}

const MoneyFlow:React.FC<MoneyFlowProps> = ({ type, amount }) =>
{
	const cn = classNames.bind(containerStyles);
	const fn = classNames.bind(formStyles);

	return (
		<section className={fn('form-with-shadow')}>
			<section className={cn('container-between')}>
				<p>{type}</p>
				<p>{amount}</p>
			</section>
		</section>
	);
};

export default MoneyFlow;