/**
 * 버튼 Storybook 모듈
 *
 * @author RWB
 * @since 2022.06.22 Wed 01:31:48
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import React from 'react';

import Button from './Button';

import { ButtonProps } from '../../types/atom/ButtonProps';
import styles from '../stories.module.scss';

export default {
	component: Button,
	title: 'Atom/Button'
} as ComponentMeta<typeof Button>;

const cn = classNames.bind(styles);

/**
 * 템플릿 반환 메서드
 *
 * @param {ButtonProps} args: ButtonProps 객체
 *
 * @returns {ComponentStory<typeof Button>} ComponentStory 객체
 */
function getTemplate(args: ButtonProps): ComponentStory<typeof Button>
{
	return (
		<section className={cn('root')}>
			<div className={cn('row')}>
				<Button {...args} />
			</div>
		</section>
	);
}

export const Sandbox = getTemplate.bind({});
Sandbox.args = {
	border: 'basic',
	children: 'button',
	color: 'basic'
} as ButtonProps;

/**
 * 테두리 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export function Border(): JSX.Element
{
	return (
		<section className={cn('root')}>
			<div className={cn('row')}>
				<Button border='basic'>basic</Button>
				<Button border='round'>round</Button>
				<Button border='circle'>circle</Button>
			</div>
		</section>
	);
}

/**
 * 색상 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export function Color(): JSX.Element
{
	return (
		<section className={cn('root')}>
			<div className={cn('row')}>
				<Button color='basic'>basic</Button>
				<Button color='primary'>primary</Button>
				<Button color='submit'>submit</Button>
				<Button color='info'>info</Button>
				<Button color='warn'>warn</Button>
				<Button color='error'>error</Button>
				<Button color='negative'>negative</Button>
			</div>
		</section>
	);
}