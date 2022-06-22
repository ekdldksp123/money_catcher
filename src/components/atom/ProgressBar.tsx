import 'antd/dist/antd.css';
import { Progress } from 'antd';
import React from 'react';

import { ProgressProps } from '@/types/atom/ProgressProps';

const ProgressBar:React.FC<ProgressProps> = ({ progress, status }) => (status
	? <Progress percent={progress} status={status} />
	: <Progress percent={progress} />
);

export default ProgressBar;