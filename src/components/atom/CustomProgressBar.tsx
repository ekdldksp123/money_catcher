import classNames from 'classnames/bind';
import React from 'react';

import progressStyles from '@/atom/CustomProgressBar.module.scss';

interface CustomProgressProps {
    color?: string;
	percent?: number;
    assetType: string;
    amount: number;
}

const CustomProgress:React.FC<CustomProgressProps> = ({ assetType, amount }) =>
{
	const pn = classNames.bind(progressStyles);
	const content = `${assetType} - ${amount.toLocaleString('ko-KR')}원`;

	return (
		<div className={pn('container')}>
			<div className={pn('progress', 'progress-moved')}>
				<div className={pn('progress-bar')}>{content}</div>
			</div>
		</div>
	);
};

export default CustomProgress;