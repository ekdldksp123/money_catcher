/**
 * 인덱스 페이지 컴포넌트
 *
 * @author RWB
 * @since 2022.06.24 Fri 20:21:12
 */

import classNames from 'classnames/bind';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { meta } from 'src/common/env';
import { userAtom } from 'src/common/state';

import styles from './index.module.scss';

import Button from '@/atom/Button';

/**
 * 인덱스 페이지 컴포넌트 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export default function Index(): JSX.Element
{
	const cn = classNames.bind(styles);
	const { logo } = meta;

	const userState = useRecoilValue(userAtom);

	return (
		<section className='page'>
			<article className={cn('top')}>
				<h1>머니캐처</h1>
				<h3>내 모든 금융자산을</h3>
				<h3 align='right'>한 눈에</h3>
				<img alt='thumb' className={cn('thumb')} src='https://user-images.githubusercontent.com/50317129/175783127-a9d82648-20be-4f17-88a8-51def9642acb.png' />
			</article>

			<article className={cn('intro1')}>
				<img alt='logo' className={cn('logo')} src={logo} />

				<p>여기저기 퍼져있는 내 소중한 금융자산</p>
				<p>이젠 머니캐처로 한 눈에 관리하세요!</p>
			</article>

			<article className={cn('info')}>
				<div>
					<h3>소비 / 지출</h3>

					<p>아무리 작은 돈이라도 새어나가지 않도록.</p>
					<p>머니캐처를 통해 이젠 내 손 안에서 확인하세요.</p>
				</div>

				<div>
					<img alt='info1' className={cn('pic')} src='https://user-images.githubusercontent.com/50317129/175785694-0b26402b-87d7-4cb4-a65f-62a0cbb172b4.png' />
				</div>
			</article>

			<article className={cn('info', 'color')}>
				<div>
					<img alt='info1' className={cn('pic')} src='https://user-images.githubusercontent.com/50317129/175786163-b2ba47ae-4906-49ca-9691-158088781d4f.png' />
				</div>

				<div className={cn('right')}>
					<h3>자산 / 저축</h3>

					<p>놓칠 수 있는 작은 혜택까지 간편하게.</p>
					<p>내가 받은 혜택과 받을 수 있는 혜택을</p>
					<p>확인해보세요.</p>
				</div>
			</article>

			<article className={cn('info')}>
				<div>
					<h3>구독</h3>

					<p>언젠가 보려고 결제한 OTT,</p>
					<p>나도 몰래 썩히고 있지 않으신가요?</p>
					<p>필요없는 구독은 없애고, 내게 꼭 필요한 구독만 결제하세요.</p>
				</div>

				<div>
					<img alt='info1' className={cn('pic')} src='https://user-images.githubusercontent.com/50317129/175785996-d1594374-6313-450e-967b-a2c824570cbe.png' />
				</div>
			</article>

			<article className={cn('last-wrapper')}>
				<img alt='logo' className={cn('last')} src='https://user-images.githubusercontent.com/50317129/175786230-087e4bb7-fec7-47bf-9a37-b7b25641b2f6.png' />

				<div>
					<h1>지금 시작해보세요!</h1>

					{userState ? null : (
						<Link href='/login' passHref>
							<a href='/#replace'>
								<Button border='circle' className={cn('go')} color='info'>로그인하기</Button>
							</a>
						</Link>
					)}
				</div>
			</article>
		</section>
	);
}