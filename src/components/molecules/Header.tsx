import React from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';

import Menu from '@/atom/Menu';
import { Props } from '@/types/HeaderProps';

const Header:React.FC<Props> = ({ items }) => (
	<Navbar color='light' expand='md' light>
		<NavbarBrand href='#'>
			Show Me The Money
		</NavbarBrand>
		<NavbarToggler onClick={() => console.log('click')} />
		<Collapse navbar>
			<Menu items={items} />
		</Collapse>
	</Navbar>
);

export default Header;