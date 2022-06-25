/**
 * 마이페이지 페이지 컴포넌트
 *
 * @author RWB
 * @since 2022.06.22 Wed 02:37:56
 */

import classNames from 'classnames/bind';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { BsCreditCardFill } from 'react-icons/bs';
import { FaHashtag, FaMoneyBillWave } from 'react-icons/fa';
import { MdDelete, MdEdit, MdLogout, MdSavings } from 'react-icons/md';
import { useRecoilState } from 'recoil';
import { useGetCost } from 'src/api/subscription';
import { useAuth } from 'src/common/hooks';
import { userAtom } from 'src/common/state';

import styles from './mypage.module.scss';

import Button from '@/atom/Button';
import Modal from '@/atom/Modal';
import Screen from '@/atom/Screen';

/**
 * 마이페이지 페이지 컴포넌트 JSX 반환 메서드
 *
 * @returns {JSX.Element | null} JSX
 */
export default function MyPage(): JSX.Element | null
{
	const cn = classNames.bind(styles);
	const date = new Date();

	const router = useRouter();
	const [ userState, setUserState ] = useRecoilState(userAtom);
	const [ logoutModalState, setLogoutModalState ] = useState<JSX.Element | JSX.Element[] | undefined>(undefined);
	const [ editModalState, setEditModalState ] = useState<JSX.Element | JSX.Element[] | undefined>(undefined);
	const [ deleteModalState, setDeleteModalState ] = useState<JSX.Element | JSX.Element[] | undefined>(undefined);

	useAuth(userState, false);

	const handleLogoutClick = () => setLogoutModalState(<p>로그아웃 하시겠습니까?</p>);
	const handleEditClick = () => setEditModalState(<p>이 버튼을 누르면 회원정보가 수정됩니다.</p>);
	const handleDeleteClick = () => setDeleteModalState(<p>이 버튼을 누르면 회원정보가 삭제됩니다.</p>);

	const handleLogoutModalConfirm = () =>
	{
		setUserState(undefined);
		router.push('/');
	};

	const handleLogoutModalClose = () => setLogoutModalState(undefined);
	const handleEditModalClose = () => setEditModalState(undefined);
	const handleDeleteModalClose = () => setDeleteModalState(undefined);

	const costs = useGetCost(date.getFullYear(), date.getMonth() + 1);

	return userState === undefined ? null : (
		<section className={cn('mypage', 'page')}>
			<Screen>
				<div className={cn('user-info-box')}>
					<div>
						<h1>{userState?.name}</h1>
						<h3><FaHashtag />{userState?.id}</h3>
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
						<h4 className={cn('percent', 'safe')}>{costs?.cost || 0}원</h4>
					</div>
				</div>
			</Screen>

			<article className={cn('menu')}>
				<div className={cn('menu-row')}>
					<h4>회원</h4>

					<Button border='round' color='secondary' outline onClick={handleLogoutClick}><MdLogout /> 로그아웃</Button>
					<Button border='round' color='secondary' outline onClick={handleEditClick}><MdEdit /> 정보 수정</Button>
				</div>

				<div className={cn('menu-row')}>
					<h4>자산 관리</h4>

					<Button border='round' color='secondary' outline onClick={() => router.push('/incomes')}><FaMoneyBillWave /> 지출 관리</Button>
					<Button border='round' color='secondary' outline onClick={() => router.push('/savings')}><MdSavings /> 저축 관리</Button>
					<Button border='round' color='secondary' outline onClick={() => router.push('/subscriptions')}><BsCreditCardFill /> 구독 관리</Button>
				</div>

				<div className={cn('menu-row')}>
					<h4>탈퇴</h4>
					<Button border='round' color='error' onClick={handleDeleteClick}><MdDelete /> 회원 탈퇴</Button>
				</div>
			</article>

			<Modal
				isShow={logoutModalState !== undefined}
				title='로그아웃'
				onClose={handleLogoutModalClose}
				onConfirm={handleLogoutModalConfirm}
			>
				{logoutModalState}
			</Modal>

			<Modal
				isShow={editModalState !== undefined}
				title='정보 수정'
				onClose={handleEditModalClose}
			>
				{editModalState}
			</Modal>

			<Modal
				isShow={deleteModalState !== undefined}
				title='회원 탈퇴'
				onClose={handleDeleteModalClose}
			>
				{deleteModalState}
			</Modal>
		</section>
	);
}