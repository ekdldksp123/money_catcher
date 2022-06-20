/**
 * 로딩 Storybook 모듈
 *
 * @author RWB
 * @since 2022.06.21 Tue 02:51:21
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import React from 'react';

import Loading from './Loading';

import { LoadingProps } from '../../types/atom/LoadingProps';
import styles from '../stories.module.scss';

export default {
	component: Loading,
	title: 'Atom/Loading'
} as ComponentMeta<typeof Loading>;

const cn = classNames.bind(styles);

/**
 * 템플릿 반환 메서드
 *
 * @param {LoadingProps} args: LoadingProps 객체
 *
 * @returns {ComponentStory<typeof Loading>} ComponentStory 객체
 */
function getTemplate(args: LoadingProps): ComponentStory<typeof Loading>
{
	return (
		<section className={cn('root')}>
			<div className={cn('row')}>
				<Loading {...args} />
			</div>
		</section>
	);
}

export const Sandbox = getTemplate.bind({});
Sandbox.args = { hasLoading: true } as LoadingProps;