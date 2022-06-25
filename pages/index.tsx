/**
 * 인덱스 페이지 컴포넌트
 *
 * @author RWB
 * @since 2022.06.24 Fri 20:21:12
 */

import Modal from '@/atom/Modal';
import Chart, { ChartProps } from '@/atom/Chart';

/**
 * 인덱스 페이지 컴포넌트 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export default function Index(): JSX.Element
{
	const chartProps:ChartProps = {
		props: [
			{ amount: 10000000, name: '미래에셋' },
			{ amount: 20000000, name: '신한' },
			{ amount: 25000000, name: '키움' },
			{ amount: 30000000, name: '나무' }
		]
	};
	return (
		<section className='page' />
			<Chart props={chartProps.props} />
		</section>
	);
}