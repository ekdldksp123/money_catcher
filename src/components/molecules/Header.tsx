import React from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarText, NavbarToggler } from 'reactstrap';

const Header:React.FC = () => (
	<Navbar color='light' expand='md' light>
		<NavbarBrand href='/'>
			reactstrap
		</NavbarBrand>
		<NavbarToggler onClick={() => console.log('click')} />
		<Collapse navbar>

			<NavbarText>
				Simple Text
			</NavbarText>
		</Collapse>
	</Navbar>
);

export default Header;