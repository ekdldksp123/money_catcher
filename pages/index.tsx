import type { NextPage } from 'next';
import Head from 'next/head';

import LoginView from './login';

// import styles from '../styles/Home.module.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Home: NextPage = () => (
	// <div className={styles.container}>
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