/**
 * 모바일 네비게이션 Storybook 모듈
 *
 * @author RWB
 * @since 2022.06.21 Tue 03:12:36
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import React from 'react';

import MobileNav from './MobileNav';

import { NavProps } from '../../types/atom/NavProps';
import { Item } from '../../types/HeaderProps';
import styles from '../stories.module.scss';

export default {
	component: MobileNav,
	title: 'Atom/MobileNav'
} as ComponentMeta<typeof MobileNav>;

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
 * @returns {ComponentStory<typeof MobileNav>} ComponentStory 객체
 */
function getTemplate(args: NavProps): ComponentStory<typeof MobileNav>
{
	return (
		<section className={cn('root')}>
			<div className={cn('row')}>
				<MobileNav {...args} />
			</div>
		</section>
	);
}

export const Sandbox = getTemplate.bind({});
Sandbox.args = { menuList: items } as NavProps;