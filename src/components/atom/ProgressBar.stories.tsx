/**
 * progressbar Storybook 모듈
 * 
 * @author punchlips97
 * @since 2022.06.22
 */
 import styles from '../stories.module.scss';
 import { ComponentStory, ComponentMeta } from '@storybook/react';
 import classNames from 'classnames/bind';
 import React from 'react';
 
 import ProgressBar from './ProgressBar';

 import {ProgressProps} from '../../types/atom/ProgressProps';
 

 export default {
    component: ProgressBar,
    title: 'Atom/ProgressBar',
 } as ComponentMeta<typeof ProgressBar>;

 const cn = classNames.bind(styles);

 /**
 * 템플릿 반환 메서드
 *
 * @param {ProgressProps} args: ProgressProps 객체
 *
 * @returns {ComponentStory<typeof ProgressBar>} ProgressBar 객체
 */

  function getTemplate (args: ProgressProps): ComponentStory<typeof ProgressBar> {
    return (
        <section className={cn('root')}>
            <div className={cn('row')}>
                <ProgressBar {...args} />
            </div>
        </section>
    );
 };

 export const ProgressCompelete = getTemplate.bind({});

 ProgressCompelete.args = {
     process: 100
 } as unknown as ProgressProps;

 export const ProgressActive = getTemplate.bind({});

 ProgressActive.args = {
     process: 50,
     status: 'active'
 } as unknown as ProgressProps;

 export const ProgressException = getTemplate.bind({});

 ProgressException.args = {
     process: 70,
     status: 'exception'
 } as unknown as ProgressProps;