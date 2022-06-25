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

const NavTabs: React.FC<AssetProps> = ({ asset }) =>
{
	console.dir(asset);
	const [ total, setTotal ] = useState<AssetData[]>([]);
	const [ plus, setPlus ] = useState<AssetData[]>([]);
	const [ minus, setMinus ] = useState<AssetData[]>([]);

	useEffect(() =>
	{
		if (asset)
		{
			setTotal([ ...total ]);
			const plusData = asset.filter((v:AssetData) => v.type === 'income');
			const minusData = asset.filter((v:AssetData) => v.type === 'spend');
			setPlus([ ...plusData ]);
			setMinus([ ...minusData ]);
		}
	}, [ asset ]);

	return (
		<Container>
			<Tabs defaultActiveKey='1' style={{ width: '100%' }}>
				<TabPane key='1' tab={<span><StarOutlined />전체</span>}>
					<TwoWayRow amount={3500000} division='입금' month={1} type='월급' />
					<TwoWayRow amount={135000} division='출금' month={1} type='쇼핑' />
					<TwoWayRow amount={250000} division='출금' month={1} type='의료비' />
					<TwoWayRow amount={450000} division='출금' month={1} type='월세' />
					<TwoWayRow amount={300000} division='출금' month={1} type='교육' />
					<TwoWayRow amount={266000} division='출금' month={1} type='식비' />
					<TwoWayRow amount={500000} division='출금' month={1} type='연금' />
					<TwoWayRow amount={3500000} division='입금' month={2} type='월급' />
					<TwoWayRow amount={3500000} division='입금' month={3} type='월급' />
					<TwoWayRow amount={3500000} division='입금' month={4} type='월급' />
					<TwoWayRow amount={500000} division='입금' month={1} type='기타' />
					<TwoWayRow amount={150000} division='입금' month={1} type='투자' />
				</TabPane>
				<TabPane key='2' tab={<span><MinusCircleOutlined />지출</span>}>
					<OneWayRow amount={135000} month={1} type='쇼핑' />
					<OneWayRow amount={250000} month={1} type='의료비' />
					<OneWayRow amount={450000} month={1} type='월세' />
					<OneWayRow amount={300000} month={1} type='교육' />
					<OneWayRow amount={266000} month={1} type='식비' />
					<OneWayRow amount={500000} month={1} type='연금' />
				</TabPane>
				<TabPane key='3' tab={<span><PlusCircleOutlined />수입</span>}>
					<OneWayRow amount={3500000} month={1} type='월급' />
					<OneWayRow amount={500000} month={1} type='기타' />
					<OneWayRow amount={3500000} month={2} type='월급' />
					<OneWayRow amount={150000} month={3} type='투자' />
					<OneWayRow amount={3500000} month={3} type='월급' />
					<OneWayRow amount={3500000} month={4} type='월급' />

				</TabPane>
			</Tabs>
		</Container>
	);
};

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
			<section className={cn('container-between')}>
				<p>{`${month} 월`}</p>
				<p>{type}</p>
				<p>{`${amount.toLocaleString('ko-KR')} 원`}</p>
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
			<section className={cn('container-between')}>
				<p>{`${month} 월`}</p>
				<p>{division}</p>
				<p>{type}</p>
				<p>{`${amount.toLocaleString('ko-KR')} 원`}</p>
			</section>
		</section>
	);
};