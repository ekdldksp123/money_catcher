/**
 * 마이페이지 페이지 컴포넌트
 *
 * @author RWB
 * @since 2022.06.22 Wed 02:37:56
 */

import classNames from 'classnames/bind';
import { useRouter } from 'next/router';
import { FaMoneyBillWave } from 'react-icons/fa';
import { MdDelete, MdEdit, MdLogout } from 'react-icons/md';
import { useRecoilState } from 'recoil';
import { useAuth } from 'src/common/hooks';
import { userAtom } from 'src/common/state';

import styles from './mypage.module.scss';

import Button from '@/atom/Button';

/**
 * 마이페이지 페이지 컴포넌트 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export default function MyPage(): JSX.Element | null
{
	const cn = classNames.bind(styles);

	const router = useRouter();
	const [ userState, setUserState ] = useRecoilState(userAtom);

	useAuth(userState, false);

	const handleLogout = () =>
	{
		setUserState(undefined);
		router.push('/');
	};

	return userState ? (
		<section className={cn('mypage', 'page')}>
			<article className={cn('user-info')}>
				<div className={cn('user-info-box')}>
					<div>
						<h1>{userState?.name}</h1>
						<h3>@{userState?.id}</h3>
					</div>

					<img alt='avatar' src={userState?.avatar} />
				</div>

				<div className={cn('user-info-assets')}>
					<div className={cn('user-info-assets-item')}>
						<span>지출</span>
						<h4 className={cn('percent', 'danger')}>93.43%</h4>
					</div>

					<div className={cn('user-info-assets-item')}>
						<span>저축</span>
						<h4 className={cn('percent', 'warn')}>63%</h4>
					</div>

					<div className={cn('user-info-assets-item')}>
						<span>구독</span>
						<h4 className={cn('percent', 'safe')}>24%</h4>
					</div>
				</div>
			</article>

			<article className={cn('menu')}>
				<div className={cn('menu-row')}>
					<h4>회원</h4>

					<Button border='round' color='secondary' outline onClick={handleLogout}><MdLogout /> 로그아웃</Button>
					<Button border='round' color='secondary' outline><MdEdit /> 정보 수정</Button>
				</div>

				<div className={cn('menu-row')}>
					<h4>자산 관리</h4>

					<Button border='round' color='secondary' outline><FaMoneyBillWave /> 지출 관리</Button>
					<Button border='round' color='secondary' outline><FaMoneyBillWave /> 저축 관리</Button>
				</div>

				<div className={cn('menu-row')}>
					<h4>탈퇴</h4>
					<Button border='round' color='error'><MdDelete /> 회원 탈퇴</Button>
				</div>
			</article>
		</section>
	) : null;
}