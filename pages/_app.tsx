import '../styles/globals.css';
import 'normalize.css/normalize.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import NavBar from '@/layout/NavBar';

function MyApp({ Component, pageProps }: AppProps)
{
	return (
		<>
			<Head>
				{/* 왜 파비콘 안나옴...? */}
				<link href='/favicon.ico' rel='icon' />
				<meta charSet='UTF-8' />
				<meta content='width=device-width, initial-scale=1.0' name='viewport' />
				<meta content='upgrade-insecure-requests' httpEquiv='Content-Security-Policy' />
				<meta content='ie=edge' httpEquiv='X-UA-Compatible' />
			</Head>
			<NavBar />
			<Component {...pageProps} />
			<div className='portal' />
		</>
	);
}

export default MyApp;