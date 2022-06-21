/**
 * 로딩 컴포넌트
 *
 * @author RWB
 * @since 2022.06.21 Tue 01:22:03
 */

import classNames from 'classnames/bind';
import { AiOutlineLoading, AiOutlineLoading3Quarters } from 'react-icons/ai';

import styles from './Loading.module.scss';

import { LoadingProps } from '@/types/atom/LoadingProps';

/**
 * 로딩 컴포넌트 JSX 반환 메서드
 *
 * @param {LoadingProps} param0: LoadingProps 객체
 *
 * @returns {JSX.Element | null} JSX
 */
export default function Loading({ hasLoading }: LoadingProps): JSX.Element | null | undefined | boolean
{
	const cn = classNames.bind(styles);

	return hasLoading && (
		<div className={cn('loading-dimmer')}>
			<div className={cn('loading')}>
				<div className={cn('icon-wrapper', 'main')}>
					<AiOutlineLoading className={cn('icon', 'main')} />
				</div>

				<div className={cn('icon-wrapper')}>
					<AiOutlineLoading3Quarters className={cn('icon')} />
				</div>
			</div>
		</div>
	);
}