/**
 * 로그인 페이지 컴포넌트
 *
 * @author punchlips97
 * @since 2022.06.22 Tue 02:04:00
 */

import classNames from 'classnames/bind';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { meta, user } from 'src/common/env';
import { useAuth } from 'src/common/hooks';
import { userAtom } from 'src/common/state';

import styles from './login.module.scss';

import btnStyles from '@/atom/ButtonGroup.module.scss';
import Modal from '@/atom/Modal';
import formStyles from '@/molecules/FormGroup.module.scss';

/**
 * 로그인 페이지 컴포넌트 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export default function Login(): JSX.Element
{
	const router = useRouter();

	const cn = classNames.bind(styles);
	const fn = classNames.bind(formStyles);
	const bn = classNames.bind(btnStyles);

	const { logo } = meta;

	const [ modalState, setModalState ] = useState<JSX.Element | JSX.Element[] | undefined>(undefined);
	const [ userState, setUserState ] = useRecoilState(userAtom);

	useAuth(userState, true, '/mypage');

	const handleClose = () => setModalState(undefined);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>
	{
		const { elements } = e.currentTarget;

		e.preventDefault();

		const id = elements.namedItem('id') as HTMLInputElement;
		const password = elements.namedItem('password') as HTMLInputElement;

		// 아이디가 다를 경우
		if (id.value !== user.id)
		{
			setModalState((
				<>
					<p>로그인에 실패했습니다.</p>
					<p>아이디를 확인해주세요.</p>
				</>
			));
		}

		// 비밀번호가 다를 경우
		else if (password.value !== user.password)
		{
			setModalState((
				<>
					<p>로그인에 실패했습니다.</p>
					<p>비밀번호를 확인해주세요.</p>
				</>
			));
		}

		// 계정이 맞을 경우
		else
		{
			setUserState(user);
			router.push('/');
		}
	};

	return (
		<>
			<section className={cn('login', 'page')}>
				<form className={fn('form')} onSubmit={handleSubmit}>
					<img alt='logo' className={cn('logo')} src={logo} />

					<h1 className={fn('title')}>로그인</h1>

					<input className={fn('input')} name='id' placeholder='ID' type='text' required />
					<input className={fn('input')} name='password' placeholder='Password' type='password' required />

					<Link href='/signup'><span className={fn('link')}>회원 가입</span></Link>

					<button className={bn('form-button')} type='submit'>Submit</button>
				</form>
			</section>

			<Modal
				isShow={modalState !== undefined}
				title='로그인 실패'
				onClose={handleClose}
			>
				{modalState}
			</Modal>
		</>
	);
}