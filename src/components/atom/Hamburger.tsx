/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

const HamBurger = () =>
{
	const [ isClicked, setIsClicked ] = useState(false);

	useEffect(() =>
	{
		if (isClicked) toggleBurger();
	}, [ isClicked ]);

	const toggleBurger = () =>
	{
		const burger = document.querySelector('.hamburger') as HTMLParagraphElement;
		burger.addEventListener('click', () =>
		{
			burger.classList.toggle('toggle');
		});
	};

	return (
		<div
			className='hamburger'
			css={burger}
			onClick={() => setIsClicked(!isClicked)}
		>
			<div className='line1' />
			<div className='line2' />
			<div className='line3' />
		</div>
	);
};

const burger = css`
width: 50px;
margin-left: 25px;

& div {
    background-color: white;
    width: 45px;
    height: 5px;
    margin: 5px;
    transition: all 0.5s;
}

& .toggle .line1 {
    transform: rotate(-45deg) translate(-8px, 6px)
}

& .toggle .line2 {
    opacity: 0;
}

& .toggle .line3 {
    transform: rotate(45deg) translate(-8px, -6px)
}
`;

export default HamBurger;