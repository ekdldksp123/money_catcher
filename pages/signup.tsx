/**
 * 회원가입 페이지 컴포넌트
 *
 * @author punchlips97
 * @since 2022.06.22 Tue 02:04:00
 */

import classNames from 'classnames/bind';

import styles from './signup.module.scss';

import SignupForm from '@/molecules/SignupForm';

/**
 * 회원가입 페이지 컴포넌트 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export default function SignUp(): JSX.Element
{
	const cn = classNames.bind(styles);

	return (
		<section className={cn('signup', 'page')}>
			<SignupForm />
		</section>
	);
}