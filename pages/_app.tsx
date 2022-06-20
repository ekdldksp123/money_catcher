// import '../styles/globals.css';
import 'normalize.css/normalize.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import NavBar from '@/layout/NavBar';

function MyApp({ Component, pageProps }: AppProps)
{
	return (
		<>
			<Head>
				<link href='/favicon.ico' rel='icon' type='image/x-icon' />
				<meta charSet='UTF-8' />
				<meta content='width=device-width, initial-scale=1.0' name='viewport' />
				<meta content='upgrade-insecure-requests' httpEquiv='Content-Security-Policy' />
				<meta content='ie=edge' httpEquiv='X-UA-Compatible' />
			</Head>
			<NavBar />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;