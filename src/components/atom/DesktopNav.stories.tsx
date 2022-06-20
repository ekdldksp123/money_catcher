/**
 * 데스크탑 네비게이션 Storybook 모듈
 *
 * @author RWB
 * @since 2022.06.21 Tue 03:05:17
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import React from 'react';

import DesktopNav from './DesktopNav';

import { NavProps } from '../../types/atom/NavProps';
import { Item } from '../../types/HeaderProps';
import styles from '../stories.module.scss';

export default {
	component: DesktopNav,
	title: 'Atom/DesktopNav'
} as ComponentMeta<typeof DesktopNav>;

const cn = classNames.bind(styles);

const items: Item[] = [
	{ name: '홈', path: '/' },
	{ name: 'My 지출 관리', path: '/ji' },
	{ name: 'My 저축 관리', path: '/ju' },
	{ name: 'My 구독 관리', path: '/gu' }
];

/**
 * 템플릿 반환 메서드
 *
 * @param {NavProps} args: NavProps 객체
 *
 * @returns {ComponentStory<typeof DesktopNav>} ComponentStory 객체
 */
function getTemplate(args: NavProps): ComponentStory<typeof DesktopNav>
{
	return (
		<section className={cn('root')}>
			<div className={cn('row')}>
				<DesktopNav {...args} />
			</div>
		</section>
	);
}

export const Sandbox = getTemplate.bind({});
Sandbox.args = { menuList: items } as NavProps;