/**
 * 모달 컴포넌트
 *
 * @author RWB
 * @since 2022.06.25 Sat 00:12:31
 */

import classNames from 'classnames/bind';

import Button from './Button';

import { ModalProps } from '@/types/atom/ModalProps';

/**
 * 모달 컴포넌트
 * @param param0
 * @returns
 */
export default function Modal({ title, isShow, onConfirm, onClose, children, className, ...props }: ModalProps): JSX.Element
{
	const cn = classNames.bind();

	return isShow ? (
		<div className={cn(className, 'modal')} {...props}>
			<h3>{title}</h3>

			<div>{children}</div>

			<div>
				<Button color='basic' onClick={onClose}>닫기</Button>
				{onConfirm ? <Button color='info' onClick={onConfirm}>확인</Button> : null}
			</div>
		</div>
	) : null;
}