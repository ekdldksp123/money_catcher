/**
 * 애플리케이션 컴포넌트
 *
 * @author RWB
 * @since 2022.06.24 Fri 19:52:33
 */

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

import './_app.scss';

import Header from '@/layout/Header';

/**
 * 애플리케이션 컴포넌트 JSX 반환 메서드
 *
 * @param {AppProps} param0: AppProps 객체
 *
 * @returns {JSX.Element} JSX
 */
export default function MyApp({ Component, pageProps }: AppProps): JSX.Element
{
	return (
		<RecoilRoot>
			<Head>
				{/* 왜 파비콘 안나옴...? */}
				<link href='/favicon.ico' rel='icon' />

				<meta charSet='UTF-8' />

				<meta content='width=device-width, initial-scale=1.0' name='viewport' />
				{/* <meta content='upgrade-insecure-requests' httpEquiv='Content-Security-Policy' /> */}
				<meta content='ie=edge' httpEquiv='X-UA-Compatible' />
			</Head>

			<Header />

			<Component {...pageProps} />
		</RecoilRoot>
	);
}