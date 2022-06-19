import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import { Item, Props } from '@/types/HeaderProps';

const Menu:React.FC<Props> = ({ items = [] }) =>
{
	const navigations = items.map((v:Item, i:number) => (
		<NavItem key={i}>
			<NavLink href={v.path} key={i}>
				{v.name}
			</NavLink>
		</NavItem>
	));

	return (
		<Nav className='me-auto' navbar>
			{navigations}
		</Nav>
	);
};

export default Menu;