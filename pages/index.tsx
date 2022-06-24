/**
 * 인덱스 페이지 컴포넌트
 *
 * @author RWB
 * @since 2022.06.24 Fri 20:21:12
 */

/**
 * 인덱스 페이지 컴포넌트 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
import classNames from 'classnames/bind';

import formStyles from '@/molecules/FormGroup.module.scss';

export default function Index(): JSX.Element
{
	const fn = classNames.bind(formStyles);
	return (
		<section className='page'>
			<h1 className={fn('title')}>하이빈채</h1>
		</section>
	);
}