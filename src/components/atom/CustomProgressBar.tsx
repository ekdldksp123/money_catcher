import classNames from 'classnames/bind';
import React from 'react';

import progressStyles from '@/atom/CustomProgressBar.module.scss';
import containerStyles from '@/layout/ContainerGroup.module.scss';

interface CustomProgressProps {
    color?: string;
	percent?: number;
    assetType: string;
    amount: number;
}

const CustomProgress:React.FC<CustomProgressProps> = ({ assetType, amount }) =>
{
	const cn = classNames.bind(containerStyles);
	const pn = classNames.bind(progressStyles);
	const content = `${amount.toLocaleString('ko-KR')}원`;

	return (
		<div className={cn('container-content')}>
			<div className={pn('wrapper')}>
				<label className={pn('label')} htmlFor='progress'>{assetType}</label>
				<div className={pn('container')}>
					<div className={pn('progress', 'progress-moved')}>
						<div className={pn('progress-bar')}>{content}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CustomProgress;