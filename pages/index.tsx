import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '@/layout/ContainerGroup.module.scss';
import classNames from 'classnames/bind';

const Home: NextPage = () => {

	const cn = classNames.bind(styles);
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta content='Created by MayB' name='description' />
			</Head>
			<section className={cn('container-center')}>
				Main
			</section>
		</div>
	);
};

export default Home;