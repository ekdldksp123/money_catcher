import 'antd/dist/antd.css';
import { Progress } from 'antd';
import React from 'react';

import { ProgressProps, ProgressStatus, ProgressType } from '@/types/atom/ProgressProps';

const ProgressBar:React.FC<ProgressProps> = ({ percent, status, type, className }) =>
{
	const renderProgress = (status?: ProgressStatus, type?: ProgressType) =>
	{
		if (status && type)
		{
			return <Progress className={className} percent={percent} status={status} strokeColor={strokeColor} type={type} />;
		} if (status)
		{
			return <Progress className={className} percent={percent} status={status} strokeColor={strokeColor} type='line' />;
		} if (type)
		{
			return <Progress className={className} percent={percent} strokeColor={strokeColor} type={type} />;
		} return null;
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