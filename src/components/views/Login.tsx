/**
 *
 * 로그인
 *
 * @author punchlips97
 * @since 2022.06.22 Tue 02:04:00
 *
 */
import classNames from 'classnames/bind';
import Link from 'next/link';
import React from 'react';

import btnStyles from '@/atom/ButtonGroup.module.scss';
import containerStyles from '@/layout/ContainerGroup.module.scss';
import formStyles from '@/molecules/FormGroup.module.scss';

const Login:React.FC = () =>
{
	const cn = classNames.bind(formStyles);
	const fn = classNames.bind(containerStyles);
	const bn = classNames.bind(btnStyles);

	return (
		<section className={fn('container-center')}>

			<section className={cn('form')}>
				<h1 className={cn('title')}>Login</h1>
				<input className={cn('input')} placeholder='ID' type='text' />
				<input className={cn('input')} placeholder='Password' type='password' />

				<Link href='/signup'><span className={cn('link')}>회원 가입</span></Link>
				<button className={bn('form-button')}>Submit</button>
			</section>
		</section>
	);
};

export default Login;