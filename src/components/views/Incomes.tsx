import 'antd/dist/antd.css';

import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';

import Toast from '@/atom/Toast';
import Banner from '@/layout/Banner';
import NavTabs from '@/molecules/Tabs';
import { AssetProps } from '@/types/molecules/AssetProps';

const IncomesView:React.FC<AssetProps> = ({ asset }) =>
{
	const [ pushAlert, setPushAlert ] = useState<boolean>(false);

	useEffect(() =>
	{
		setTimeout(() =>
		{
			setPushAlert(true);

			setTimeout(() =>
			{
				setPushAlert(false);
			}, 3000);
		}, 1500);
	}, []);

	return (
		<>
			<section className='page'>
				<Banner title='지출 관리' />

				<NavTabs asset={asset} />

				<Toast isShow={pushAlert} title='지출 알림' type='info'>
					목표 지출 금액이 150,000원 남았습니다
				</Toast>
			</section>
		</>
	);
};

export default IncomesView;

const Title = styled.h1`
	margin: 0;
	padding-top: 20px;
	padding-bottom: 20px;
	color: var(--primary);
	text-align: center;
	font-size: 30px;
`;