import 'antd/dist/antd.css';
import { Progress } from 'antd';
import React from 'react';

import { ProgressProps } from '@/types/atom/ProgressProps';

const ProgressBar:React.FC<ProgressProps> = ({ percent, status, type }) =>
{
	const renderProgress = (status?:any, type?:any) =>
	{
		if (status && type)
		{
			return <Progress percent={percent} status={status} strokeColor={strokeColor} type={type} />;
		} if (status)
		{
			return <Progress percent={percent} status={status} strokeColor={strokeColor} type='line' />;
		} if (type)
		{
			return <Progress percent={percent} strokeColor={strokeColor} type={type} />;
		} return <></>;
	};

	return (
		renderProgress(status, type)
	);
};

export default ProgressBar;

const strokeColor = {
	'0%': '#108ee9',
	'100%': '#87d068'
};