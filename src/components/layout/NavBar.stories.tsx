/**
 * 계정 박스 Storybook 모듈
 *
 * @author RWB
 * @since 2022.06.21 Tue 03:02:33
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import React from 'react';

import NavBar from './NavBar';

import styles from '../stories.module.scss';

export default {
	component: NavBar,
	title: 'Layout/NavBar'
} as ComponentMeta<typeof NavBar>;

const cn = classNames.bind(styles);

/**
 * 템플릿 반환 메서드
 *
 * @returns {ComponentStory<typeof NavBar>} ComponentStory 객체
 */
function getTemplate(): ComponentStory<typeof NavBar>
{
	return (
		<section className={cn('root')}>
			<div className={cn('row')}>
				<NavBar />
			</div>
		</section>
	);
}

export const Sandbox = getTemplate.bind({});
Sandbox.args = {};