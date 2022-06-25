/**
 * 구독 관리 페이지 컴포넌트
 *
 * @author RWB
 * @since 2022.06.25 Sat 14:34:21
 */

import classNames from 'classnames/bind';
import { useState, FormEvent, useRef } from 'react';
import { MdAddCircle, MdWarning } from 'react-icons/md';
import { useRecoilValue } from 'recoil';
import SubscriptionsService, { SubscriptionPutRequestProps, useGetCost, useGetEfficiency, useGetRecommendation } from 'src/api/subscription';
import { useAuth } from 'src/common/hooks';
import { userAtom } from 'src/common/state';

import styles from './subscriptions.module.scss';

import Box from '@/atom/Box';
import Button from '@/atom/Button';
import Modal from '@/atom/Modal';
import Screen from '@/atom/Screen';
import formStyles from '@/molecules/FormGroup.module.scss';

/**
 * 구독 관리 페이지 컴포넌트 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export default function Subscriptions(): JSX.Element
{
	const cn = classNames.bind(styles);
	const fn = classNames.bind(formStyles);

	const service = new SubscriptionsService();
	const ref = useRef<HTMLFormElement | null>(null);

	const year = new Date().getFullYear();
	const month = new Date().getMonth() + 1;

	const userState = useRecoilValue(userAtom);

	const currentCosts = useGetCost(year, month);
	const prevCosts = useGetCost(year, month - 1);
	const recommendation = useGetRecommendation(year, month);

	const efficiency = useGetEfficiency(year, month);

	const [ modalState, setModalState ] = useState<JSX.Element | JSX.Element[] | undefined>(undefined);
	const [ resultModalState, setResultModalState ] = useState<JSX.Element | JSX.Element[] | undefined>(undefined);

	const handleClick = () => setModalState(true);

	const handleModalClose = () => setModalState(undefined);
	const handleResultModalClose = () => setResultModalState(undefined);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) =>
	{
		e.preventDefault();

		const goal = e.currentTarget.elements.namedItem('goal') as HTMLSelectElement;
		const name = e.currentTarget.elements.namedItem('name') as HTMLInputElement;
		const type = e.currentTarget.elements.namedItem('type') as HTMLInputElement;
		const usage = e.currentTarget.elements.namedItem('usage') as HTMLInputElement;

		const body: SubscriptionPutRequestProps = {
			goal: goal.value,
			name: name.value,
			type: type.value,
			usage: usage.value
		};

		const response = await service.putSubscription(year, month, body);

		setModalState(undefined);
		setResultModalState(<p>{response?.name} 추가가 완료됐습니다.</p>);
	};

	useAuth(userState, false, '/login');

	const differ = (current?: number = 0, before?: number = 0): number => current - before;

	return (
		<section className={cn('subscriptions', 'page')}>
			<Screen className={cn('screen-custom')}>
				<h3>구독 관리</h3>
			</Screen>

			<div className={cn('box-wrapper')}>
				<button className={cn('adder')} onClick={handleClick}>
					<MdAddCircle size={64} />
					<p>구독 추가</p>
				</button>

				<Box>
					<h3 className={cn('box-title')}>구독 개요</h3>

					<div className={cn('summary-content')}>
						<div className={cn('summary-board')}>
							<div className={cn('summary-board-row')}>
								<p className={cn('summary-current')}>{month}월</p>
								<h4 className={cn('summary-current')}>{currentCosts?.cost.toLocaleString('ko-KR') || 0}원</h4>
							</div>

							<div className={cn('summary-board-row')}>
								<p />
								<p>전월 대비 <b className={cn('summary-prev', differ(currentCosts?.cost, prevCosts?.cost) > 0 ? 'up' : 'down')}>{differ(currentCosts?.cost, prevCosts?.cost).toLocaleString('ko-KR')}</b>원</p>
							</div>
						</div>
					</div>
				</Box>

				<Box>
					<h3 className={cn('box-title')}>구독 현황</h3>

					<div className={cn('table-wrapper')}>
						<table className={cn('list-table')}>
							<thead>
								<tr>
									<th>타입</th>
									<th>이름</th>
									<th>목표 횟수</th>
									<th>사용 횟수</th>
									<th colSpan={2}>평가</th>
								</tr>
							</thead>

							<tbody>
								{efficiency.length > 0 ? efficiency.map(({ type, name, goal, usage, efficiency, cancel }, index) => (
									<tr key={`efficiency-${index}`}>
										<td>{type}</td>
										<td>{name}</td>
										<td align='center'>{goal}</td>
										<td align='center'>{usage}</td>
										<td align='center'>{efficiency}</td>
										<td align='center'>{cancel ? <MdWarning color='crimson' /> : null}</td>
									</tr>
								)) : (
									<tr>
										<td align='center' colSpan={6}>이번 달엔 사용한 내역이 없어요!</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</Box>

				<Box>
					<h3 className={cn('box-title')}>구독 추천</h3>

					<div className={cn('table-wrapper')}>
						<table className={cn('list-table')}>
							<thead>
								<tr>
									<th>타입</th>
									<th>이름</th>
									<th>사용 횟수</th>
								</tr>
							</thead>

							<tbody>
								{recommendation.length > 0 ? recommendation.map(({ type, name, usage, url }, index) => (
									<tr className={cn('clickable')} key={`recommendation-${index}`} onClick={() => window.open(url)}>
										<td>{type}</td>
										<td>{name}</td>
										<td align='center'>{usage}</td>
									</tr>
								)) : (
									<tr>
										<td>이번 달엔 사용한 내역이 없어요!</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</Box>
			</div>

			<Modal
				isShow={modalState !== undefined}
				title='구독 추가'
				onClose={handleModalClose}
			>
				<form className={fn('form')} ref={ref} onSubmit={handleSubmit}>
					<div className={fn('select-box', 'required')}>
						<select className={fn('select')} name='type' placeholder='타입 선택' required>
							<option>타입 선택</option>
							<option>FOOD</option>
							<option>OTT</option>
							<option>MARKET</option>
							<option>LIFE</option>
						</select>
					</div>

					<input
						className={fn('input')}
						name='name'
						placeholder='상품 이름'
						type='text'
						required
					/>

					<input
						className={fn('input')}
						name='goal'
						placeholder='목표 횟수'
						type='number'
						required
					/>

					<input
						className={fn('input')}
						name='usage'
						placeholder='사용 횟수'
						type='number'
						required
					/>

					<Button border='round' className={cn('button')} color='submit' type='submit' outline>추가</Button>
				</form>
			</Modal>

			<Modal
				isShow={resultModalState !== undefined}
				title='결과'
				onClose={handleResultModalClose}
			>
				{resultModalState}
			</Modal>
		</section>
	);
}