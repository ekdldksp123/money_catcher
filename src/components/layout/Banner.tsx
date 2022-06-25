import styled from '@emotion/styled';
import classNames from 'classnames/bind';
import React from 'react';

import styles from './Banner.module.scss';

interface BannerProps {
    title: string;
}

const Banner:React.FC<BannerProps> = ({ title }) =>
{
	const cn = classNames.bind(styles);

	return (
		<article className={cn('banner-wrapper')}>
			<div className={cn('banner-box')}>
				<Title>{title}</Title>
			</div>
		</article>
	);
};

export default Banner;

const Title = styled.h1`
    font-family: 'Jua', sans-serif;
    margin: 0;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 40px;
    color: var(--secondary);
    text-align: center;
`;