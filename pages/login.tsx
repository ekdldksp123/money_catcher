/**
 * 로그인 페이지 컴포넌트
 *
 * @author punchlips97
 * @since 2022.06.22 Tue 02:04:00
 */

import classNames from 'classnames/bind';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useRecoilState } from 'recoil';
import { user } from 'src/common/env';
import { userAtom } from 'src/common/state';

import styles from './login.module.scss';

import btnStyles from '@/atom/ButtonGroup.module.scss';
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

	const [ userState, setUserState ] = useRecoilState(userAtom);

	// 유저 정보가 유효할 경우
	if (userState)
	{
		router.push('/mypage');
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>
	{
		const { id, password }: { id: HTMLInputElement, password: HTMLInputElement } = e.currentTarget;

		e.preventDefault();

		// 아이디가 다를 경우
		if (id.value !== user.id)
		{
			console.dir('아이디 ㅅㅂ');
		}

		// 비밀번호가 다를 경우
		else if (password.value !== user.password)
		{
			console.dir('비밀번호 ㅅㅂ');
		}

		// 계정이 맞을 경우
		else
		{
			setUserState(user);
			router.push('/');
		}
	};

	return (
		<section className={cn('login', 'page')}>
			<form className={fn('form')} onSubmit={handleSubmit}>
				<h1 className={fn('title')}>로그인</h1>

				<input className={fn('input')} name='id' placeholder='ID' type='text' required />
				<input className={fn('input')} name='password' placeholder='Password' type='password' required />

				<Link href='/signup'><span className={fn('link')}>회원 가입</span></Link>

				<button className={bn('form-button')} type='submit'>Submit</button>
			</form>
		</section>
	);
}