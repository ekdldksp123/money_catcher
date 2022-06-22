/**
 * progressbar Storybook 모듈
 *
 * @author punchlips97
 * @since 2022.06.22
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import React from 'react';

import ProgressBar from './ProgressBar';

import { ProgressProps } from '../../types/atom/ProgressProps';
import styles from '../stories.module.scss';

export default {
	component: ProgressBar,
	title: 'Atom/ProgressBar'
} as ComponentMeta<typeof ProgressBar>;

const cn = classNames.bind(styles);

/**
 * 템플릿 반환 메서드
 *
 * @param {ProgressProps} args: ProgressProps 객체
 *
 * @returns {ComponentStory<typeof ProgressBar>} ProgressBar 객체
 */

function getTemplate(args: ProgressProps): ComponentStory<typeof ProgressBar>
{
	return (
		<section className={cn('root')}>
			<div className={cn('row')}>
				<ProgressBar {...args} />
			</div>
		</section>
	);
}

export const ProgressCompelete = getTemplate.bind({});

ProgressCompelete.args = {
    percent: 100, 
    status: 'success'
} as ProgressProps;

export const ProgressActive = getTemplate.bind({});

ProgressActive.args = {
	percent: 50,
	status: 'active'
} as ProgressProps;

export const ProgressException = getTemplate.bind({});

ProgressException.args = {
	percent: 70,
	status: 'exception',
} as ProgressProps;

export const CircleProgressCompelete = getTemplate.bind({});

CircleProgressCompelete.args = {
    status: 'success',
    percent: 100, 
    type: 'circle'
} as ProgressProps;


export const CircleProgressException = getTemplate.bind({});

CircleProgressException.args = {
    status: 'exception',
    percent: 100, 
    type: 'circle'
} as ProgressProps;

