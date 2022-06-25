/**
 * 모달 컴포넌트
 *
 * @author RWB
 * @since 2022.06.25 Sat 00:12:31
 */

import classNames from 'classnames/bind';
import { useEffect } from 'react';

import styles from './Modal.module.scss';

import { ModalProps } from '@/types/atom/ModalProps';

/**
 * 모달 컴포넌트 JSX 반환 메서드
 *
 * @param {ModalProps} param0: ModalProps 객체
 *
 * @returns {JSX.Element} JSX
 */
export default function Modal({ title, isShow, onConfirm, onClose, children, className, ...props }: ModalProps): JSX.Element | null
{
	const cn = classNames.bind(styles);

	useEffect(() =>
	{
		const handleKeyDown = (e: KeyboardEvent) =>
		{
			const { key } = e;

			// ESC를 누를 경우
			if (key === 'Escape')
			{
				onClose();
			}

			// Enter를 누를 경우
			else if (key === 'Enter')
			{
				// 확인 메서드가 유효할 경우
				if (onConfirm)
				{
					onConfirm();
				}

				// 아닐 경우
				else
				{
					onClose();
				}
			}
		};

		document.addEventListener('keydown', handleKeyDown);

		return () => document.removeEventListener('keydown', handleKeyDown);
	}, []);

	return isShow ? (
		<div className={cn(className, 'modal-wrapper')} onClick={onClose}>
			<div className={cn(className, 'modal')} {...props}>
				<div className={cn('modal-header')}>
					<h3 className={cn('modal-title')}>{title}</h3>
				</div>

				<div className={cn('modal-body')}>{children}</div>

				<div className={cn('modal-footer')}>
					<button className={cn('modal-button', 'close')} onClick={onClose}>닫기</button>
					{onConfirm ? <button className={cn('modal-button', 'confirm')} onClick={onConfirm}>확인</button> : null}
				</div>
			</div>
		</div>
	) : null;
}