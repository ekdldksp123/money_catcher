/**
 * 계정 박스 Storybook 모듈
 *
 * @author RWB
 * @since 2022.06.21 Tue 03:02:33
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import React from 'react';

import AccountBox from './AccountBox';

import { AccountBoxProps } from '../../types/atom/AccountBoxProps';
import styles from '../stories.module.scss';

export default {
	component: AccountBox,
	title: 'Atom/AccountBox'
} as ComponentMeta<typeof AccountBox>;

const cn = classNames.bind(styles);

/**
 * 템플릿 반환 메서드
 *
 * @param {AccountBoxProps} args: AccountBoxProps 객체
 *
 * @returns {ComponentStory<typeof AccountBox>} ComponentStory 객체
 */
function getTemplate(args: AccountBoxProps): ComponentStory<typeof AccountBox>
{
	return (
		<section className={cn('root')}>
			<div className={cn('row')}>
				<AccountBox {...args} />
			</div>
		</section>
	);
}

export const Sandbox = getTemplate.bind({});
Sandbox.args = { hasLogin: false } as AccountBoxProps;