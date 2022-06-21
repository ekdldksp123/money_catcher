import type { NextPage } from 'next';
import Head from 'next/head';

import LoginView from './login';

const Home: NextPage = () => (
	<div>
		<Head>
			<title>Create Next App</title>
			<meta content='Created by MayB' name='description' />
			<link href='/favicon.ico' rel='icon' />
		</Head>
		<LoginView />
	</div>
);

export default Home;