/**
 * 이미지 버튼 Storybook 모듈
 *
 * @author RWB
 * @since 2022.06.22 Wed 02:56:09
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import React from 'react';

import ImageButton from './ImageButton';

import { ImageButtonProps } from '../../types/molecules/ImageButtonProps';
import styles from '../stories.module.scss';

export default {
	component: ImageButton,
	title: 'MoleCule/ImageButton'
} as ComponentMeta<typeof ImageButton>;

const cn = classNames.bind(styles);

/**
 * 템플릿 반환 메서드
 *
 * @param {ImageButtonProps} args: ImageButtonProps 객체
 *
 * @returns {ComponentStory<typeof ImageButton>} ComponentStory 객체
 */
function getTemplate(args: ImageButtonProps): ComponentStory<typeof ImageButton>
{
	return (
		<section className={cn('root')}>
			<div className={cn('row')}>
				<ImageButton {...args}>test</ImageButton>
			</div>
		</section>
	);
}

export const Sandbox = getTemplate.bind({});
Sandbox.args = {
	border: 'basic',
	children: 'button',
	color: 'basic'
} as ImageButtonProps;