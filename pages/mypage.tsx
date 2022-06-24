/**
 * 마이페이지 페이지 컴포넌트
 *
 * @author RWB
 * @since 2022.06.22 Wed 02:37:56
 */

import classNames from 'classnames/bind';

import styles from './mypage.module.scss';

/**
 * 마이페이지 페이지 컴포넌트 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export default function MyPage(): JSX.Element
{
	const cn = classNames.bind(styles);

	return (
		<section className={cn('mypage', 'page')}>
			<article>
				df
			</article>

			<article>
				df
			</article>

			<article>
				df
			</article>

			<article>
				df
			</article>

			<article>
				df
			</article>
		</section>
	);
}