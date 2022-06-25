/**
 * 구독 관리 페이지 컴포넌트
 *
 * @author RWB
 * @since 2022.06.25 Sat 14:34:21
 */

import classNames from 'classnames/bind';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useAuth } from 'src/common/hooks';
import { userAtom } from 'src/common/state';

import styles from './subscriptions.module.scss';

import Box from '@/atom/Box';
import ProgressBar from '@/atom/ProgressBar';
import Screen from '@/atom/Screen';
import Toast from '@/atom/Toast';

/**
 * 구독 관리 페이지 컴포넌트 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export default function Subscriptions(): JSX.Element
{
	const cn = classNames.bind(styles);
	const month = new Date().getMonth() + 1;

	const payState = useState({
		total: 60000,
		used: 47700
	})[0];

	const userState = useRecoilValue(userAtom);

	useAuth(userState, false, '/login');

	return (
		<section className={cn('subscriptions', 'page')}>
			<Screen className={cn('screen-custom')}>
				<h3>구독 관리</h3>
			</Screen>

			<Box>
				<h3 className={cn('summary-title')}>구독 개요</h3>

				<div className={cn('summary-content')}>
					<div className={cn('summary-board')}>
						<p>{month}월</p>

						<div className={cn('summary-money')}>
							<p>{payState.used}원</p>
							<p>/</p>
							<p>{payState.total}원</p>
						</div>
					</div>

					<ProgressBar className={cn('summary-progress')} percent={(payState.used / payState.total) * 100} status='active' type='line' />
				</div>
			</Box>

			<Box>
				<h3 className={cn('summary-title')}>구독 현황</h3>

				<table>
					<thead>
						<tr>
							<th>이름</th>
							<th>사용량</th>
							<th />
						</tr>
					</thead>
				</table>
			</Box>
		</section>
	);
}