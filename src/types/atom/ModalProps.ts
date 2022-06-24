import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface ModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
{
	title: string
	isShow: boolean
	onConfirm?: () => void
	onClose: () => void
}