/**
 * 이미지 버튼 컴포넌트
 *
 * @author RWB
 * @since 2022.06.22 Wed 02:48:40
 */

import classNames from 'classnames/bind';

import styles from './ImageButton.module.scss';

import Button from '../atom/Button';

import { ImageButtonProps } from '@/types/molecules/ImageButtonProps';

export default function ImageButton({ image, className, children, ...props }: ImageButtonProps): JSX.Element
{
	const cn = classNames.bind(styles);

	return (
		<Button className={cn('image-button', className)} {...props}>
			{
				image ? (
					<div>
						<img alt='button' src={image} />
					</div>
				) : null
			}

			{children}
		</Button>
	);
}