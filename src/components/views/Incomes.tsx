import { Table } from 'antd';
import classNames from 'classnames/bind';
import React from 'react';

import containerStyles from '@/layout/ContainerGroup.module.scss';
import formStyles from '@/molecules/FormGroup.module.scss';

const IncomesView:React.FC = () =>
{
	const fn = classNames.bind(containerStyles);
	const cn = classNames.bind(formStyles);
	const columns = [
		{
			dataIndex: 'name',
			title: 'Name'
		},
		{
			dataIndex: 'borrow',
			title: 'Borrow'
		},
		{
			dataIndex: 'repayment',
			title: 'Repayment'
		}
	];
	const data = [
		{
			borrow: 10,
			key: '1',
			name: 'John Brown',
			repayment: 33
		},
		{
			borrow: 100,
			key: '2',
			name: 'Jim Green',
			repayment: 0
		},
		{
			borrow: 10,
			key: '3',
			name: 'Joe Black',
			repayment: 10
		},
		{
			borrow: 75,
			key: '4',
			name: 'Jim Red',
			repayment: 45
		}
	];

	const fixedData = [];

	for (let i = 0; i < 20; i += 1)
	{
		fixedData.push({
			description: 'Everything that has a beginning, has an end.',
			key: i,
			name: [ 'Light', 'Bamboo', 'Little' ][i % 3]
		});
	}
	return (
		<section className={fn('container-center')}>
			<h1 className={cn('title')}>지출 관리</h1>
			<Table
				columns={columns}
				dataSource={data}
				pagination={false}
				style={{ width: '80%' }}
				bordered
			/>
		</section>
	);
};

export default IncomesView;