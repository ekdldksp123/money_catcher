/**
 * 차트 Storybook 모듈
 *
 * @author vinchaekim
 * @since 2022.06.25
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import React from 'react';

import Chart, { ChartData } from './Chart';

import styles from '../stories.module.scss';

export default {
	component: Chart,
	title: 'Atom/Chart'
} as ComponentMeta<typeof Chart>;

const cn = classNames.bind(styles);

function getTemplate(args: ChartData): ComponentStory<typeof Chart>
{
	return (
		<section className={cn('root')}>
			<div className={cn('row')}>
				<Chart {...args} />
			</div>
		</section>
	);
}

export const DoughnutChart = getTemplate.bind({});

DoughnutChart.args = {
	props: [
		{ amount: 10000000, name: '미래에셋' },
		{ amount: 20000000, name: '신한' },
		{ amount: 25000000, name: '키움' },
		{ amount: 30000000, name: '나무' }
	]
};