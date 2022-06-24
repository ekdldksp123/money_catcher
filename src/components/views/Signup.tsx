/**
 *
 * 회원가입
 *
 * @author punchlips97
 * @since 2022.06.22 Tue 02:04:00
 *
 */

import classNames from 'classnames/bind';
import { useRouter } from 'next/router';

import btnStyles from '@/atom/ButtonGroup.module.scss';
import containerStyles from '@/layout/ContainerGroup.module.scss';
import formStyles from '@/molecules/FormGroup.module.scss';

const SignUpView:React.FC = () =>
{
	const fn = classNames.bind(containerStyles);

	return (
		<section className={fn('container-center')}>
			<SignUpForm />
		</section>
	);
};

export default SignUpView;

const SignUpForm:React.FC = () =>
{
	const birthYears = Array.from({ length: 100 }, (v, i) => i + 1922).reverse();
	const router = useRouter();

	const onSubmit = () => router.push({ pathname: '/main' });
	const bn = classNames.bind(btnStyles);
	const cn = classNames.bind(formStyles);

	return (
		<form className={cn('form')}>
			<h1 className={cn('title')}>회원가입</h1>

			<input
				className={cn('input')}
				name='id'
				placeholder='ID'
				type='text'
			/>

			<input
				className={cn('input')}
				name='password'
				placeholder='Password'
				type='password'
			/>

			<input
				className={cn('input')}
				name='name'
				placeholder='Name'
				type='text'
			/>

			<div className={cn('select-box')}>
				<select className={cn('select')} placeholder='BirthYear'>
					<option key='0-birthYear}'>BirthYear</option>
					{ birthYears.map((v, i) => <option key={`${i + 1}-birthYear`}>{v}</option>)}
				</select>
			</div>

			<div className={cn('select-box')}>
				<select className={cn('select')} placeholder='Gender'>
					<option>Gender</option>
					<option>Male</option>
					<option>Female</option>
					<option>Unknown</option>
				</select>
			</div>

			<div className={cn('select-box')}>
				<select className={cn('select')} placeholder='Address'>
					<option>Address</option>
					<option>서울</option>
					<option>경기도</option>
					<option>강원도</option>
					<option>경상도</option>
				</select>
			</div>

			<button
				className={bn('form-button')}
				onClick={() => onSubmit()}
			>
				SignUp
			</button>
		</form>
	);
};