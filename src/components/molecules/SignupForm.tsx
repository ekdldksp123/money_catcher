/**
 * 회원가입 폼 컴포넌트
 *
 * @author punchlips97
 * @since 2022.06.22 Tue 02:04:00
 */

import classNames from 'classnames/bind';
import { useRouter } from 'next/router';
import { useState, FormEvent } from 'react';

import btnStyles from '@/atom/ButtonGroup.module.scss';
import Modal from '@/atom/Modal';
import formStyles from '@/molecules/FormGroup.module.scss';

/**
 * 회원가입 폼 컴포넌트 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export default function SignupForm(): JSX.Element
{
	const router = useRouter();

	const bn = classNames.bind(btnStyles);
	const fn = classNames.bind(formStyles);

	const [ confirmModalState, setConfirmModalState ] = useState<JSX.Element | JSX.Element[] | undefined>(undefined);
	const [ modalState, setModalState ] = useState<JSX.Element | JSX.Element[] | undefined>(undefined);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) =>
	{
		e.preventDefault();

		setConfirmModalState(
			<>
				<p>입력한 정보로 계정을 만드시겠습니까?</p>
				<b>회원가입 절차를 보여드리기 위한 동작으로, 정보가 저장되지 않습니다.</b>
			</>
		);
	};

	const handleConfirmModalClose = () => setConfirmModalState(undefined);
	const handleConfirmModalConfirm = () =>
	{
		setConfirmModalState(undefined);
		setModalState(
			<>
				<p>테스트 계정</p>
				<p>ID - test</p>
				<p>PW - test1234</p>
			</>
		);
	};

	const handleModalClose = () => router.push('/login');

	return (
		<>
			<form className={fn('form')} onSubmit={handleSubmit}>
				<h1 className={fn('title')}>회원가입</h1>

				<input
					className={fn('input')}
					name='id'
					placeholder='ID'
					type='text'
					required
				/>

				<input
					className={fn('input')}
					name='password'
					placeholder='Password'
					type='password'
					required
				/>

				<input
					className={fn('input')}
					name='name'
					placeholder='Name'
					type='text'
					required
				/>

				<input
					className={fn('input')}
					max={2022}
					maxLength={4}
					min={1922}
					minLength={4}
					name='birth-year'
					placeholder='BirthYear'
					type='number'
				/>

				<div className={fn('select-box')}>
					<select className={fn('select')} placeholder='Gender'>
						<option>Gender</option>
						<option>Male</option>
						<option>Female</option>
						<option>Unknown</option>
					</select>
				</div>

				<div className={fn('select-box')}>
					<select className={fn('select')} placeholder='Address'>
						<option>Address</option>
						<option>서울특별시</option>
						<option>부산광역시</option>
						<option>대구광역시</option>
						<option>인천광역시</option>
						<option>광주광역시</option>
						<option>대전광역시</option>
						<option>울산광역시</option>
						<option>세종특별자치시</option>
						<option>경기도</option>
						<option>강원도</option>
						<option>충청북도</option>
						<option>충청남도</option>
						<option>전라북도</option>
						<option>전라남도</option>
						<option>경상북도</option>
						<option>경상남도</option>
						<option>제주특별자치도</option>
					</select>
				</div>

				<div className={fn('select-box')}>
					<select className={fn('select')} placeholder='Address'>
						<option>Bank</option>
						<option>KB국민은행</option>
						<option>KEB하나은행</option>
						<option>신한은행</option>
						<option>우리은행</option>
						<option>NH은행</option>
						<option>IBK기업은행</option>
						<option>KDB산업은행</option>
						<option>한국씨티은행</option>
						<option>SC제일은행</option>
						<option>BNK부산은행</option>
						<option>DGB대구은행</option>
						<option>BNK경남은행</option>
						<option>SH수협은행</option>
						<option>광주은행</option>
						<option>전북은행</option>
						<option>제주은행</option>
					</select>
				</div>

				<button className={bn('form-button')}>회원가입</button>
			</form>

			<Modal
				isShow={confirmModalState !== undefined}
				title='회원가입 확인'
				onClose={handleConfirmModalClose}
				onConfirm={handleConfirmModalConfirm}
			>
				{confirmModalState}
			</Modal>

			<Modal
				isShow={modalState !== undefined}
				title='회원가입 완료'
				onClose={handleModalClose}
			>
				{modalState}
			</Modal>
		</>
	);
}