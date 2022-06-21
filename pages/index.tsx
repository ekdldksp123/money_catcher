import type { NextPage } from 'next';
import Head from 'next/head';

import { ContainerCenter } from '@/layout/ContainerGroup';

const Home: NextPage = () => (
	<div>
		<Head>
			<title>Create Next App</title>
			<meta content='Created by MayB' name='description' />
		</Head>
		<ContainerCenter>
			Main
		</ContainerCenter>
	</div>
);

export default Home;