import 'antd/dist/antd.css';
import { Progress } from 'antd';
import React from 'react';

import { ProgressProps } from '@/types/atom/ProgressProps';

const ProgressBar:React.FC<ProgressProps> = ({ percent, status }) => (status
	? <Progress percent={percent} status={status} strokeColor={strokeColor} />
	: <Progress percent={percent} strokeColor={strokeColor} />
);

export default ProgressBar;

const strokeColor = {
	'0%': '#108ee9',
	'100%': '#87d068'
};