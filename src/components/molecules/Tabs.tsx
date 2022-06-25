import { StarOutlined, MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { Tabs } from 'antd';
import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';

import 'antd/dist/antd.css';

import containerStyles from '@/layout/ContainerGroup.module.scss';
import formStyles from '@/molecules/FormGroup.module.scss';
import { AssetData, AssetProps } from '@/types/molecules/AssetProps';

const { TabPane } = Tabs;

const NavTabs: React.FC<AssetProps> = ({ asset }) => (
	<Container>
		<Tabs defaultActiveKey='1' style={{ width: '100%' }}>
			<TabPane key='1' tab={<span><StarOutlined />전체</span>}>
				{asset.map((item: AssetData[]) =>
				{
					const incomeTsx = item[0].data.map(({ key, value }, index) => <TwoWayRow amount={value} division={item[0].type === 'spend' ? '지출' : '수입'} key={index} month={item[0].month} type={key} />);
					const spendTsx = item[1].data.map(({ key, value }, index) => <TwoWayRow amount={value} division={item[1].type === 'spend' ? '지출' : '수입'} key={index} month={item[1].month} type={key} />);

					return (
						<>
							{incomeTsx}
							{spendTsx}
						</>
					);
				})}
			</TabPane>
			<TabPane key='2' tab={<span><MinusCircleOutlined />지출</span>}>
				{asset.map((item: AssetData[]) =>
				{
					const spendTsx = item[1].data.map(({ key, value }, index) => <OneWayRow amount={value} key={index} month={item[1].month} type={key} />);

					return (
						<>
							{spendTsx}
						</>
					);
				})}
			</TabPane>
			<TabPane key='3' tab={<span><PlusCircleOutlined />수입</span>}>
				{asset.map((item: AssetData[]) =>
				{
					const incomeTsx = item[0].data.map(({ key, value }, index) => <OneWayRow amount={value} key={index} month={item[0].month} type={key} />);

					return (
						<>
							{incomeTsx}
						</>
					);
				})}
			</TabPane>
		</Tabs>
	</Container>
);

export default NavTabs;

const Container = styled.div`
    padding: 20px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

interface OneWayRowProps {
	month: number;
	type: string;
	amount: number;
}

interface TwoWayRowProps {
	month: number;
	division: string;
	type: string;
	amount: number;
}

const OneWayRow:React.FC<OneWayRowProps> = ({ month, type, amount }) =>
{
	const cn = classNames.bind(containerStyles);
	const fn = classNames.bind(formStyles);

	return (
		<section className={fn('form-with-shadow')}>
			<section className={cn('custom-between')}>
				<p className={cn('width1')}>{`${month} 월`}</p>
				<p className={cn('width1')}>{type}</p>
				<p className={cn('width2')}>{`${amount.toLocaleString('ko-KR')} 원`}</p>
			</section>
		</section>
	);
};

const TwoWayRow:React.FC<TwoWayRowProps> = ({ month, division, type, amount }) =>
{
	const cn = classNames.bind(containerStyles);
	const fn = classNames.bind(formStyles);

	return (
		<section className={fn('form-with-shadow')}>
			<section className={cn('custom-between')}>
				<p className={cn('width1')}>{`${month} 월`}</p>
				<p className={cn('width1')}>{division}</p>
				<p className={cn('width1')}>{type}</p>
				<p className={cn('width2')}>{`${amount.toLocaleString('ko-KR')} 원`}</p>
			</section>
		</section>
	);
};