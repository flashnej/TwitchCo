import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
	return (
		<Navbar bg='light' expand='lg' fixed='top'>
			<Navbar.Brand href='#home'>Rushmore Recruiting</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='mr-auto'>
					<Nav.Link href='about'>About</Nav.Link>
					<Nav.Link href='job-seekers'>Job Seekers</Nav.Link>
					<Nav.Link href=''>Employers</Nav.Link>
					<Nav.Link href=''>Blog</Nav.Link>
					<Nav.Link href='contact-us'>Contact Us</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
