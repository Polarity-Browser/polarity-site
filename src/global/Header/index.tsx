import React from 'react';

import { Navbar, Nav, Form, Button, FormControl, NavDropdown } from 'react-bootstrap';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import './index.scss';

interface HeaderComponentProps {}

export const HeaderComponent: React.FC<HeaderComponentProps> = props => {
    return (
        <div>
            <Navbar
                variant="dark"
                expand="lg"
                css={{
                    backdropFilter: 'blur(5px)',
                    position: 'fixed',
                    width: '100%',
                    zIndex: 2000
                }}
            >
                <Navbar.Brand href="#home" className="d-flex align-items-center"><img className="mr-2" css={{ borderRadius: '3px' }} src="/images/icons/polarity_24x24.png" /> Polarity</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className="nav-btn" href="#link">Windows</Nav.Link>
                        <Nav.Link className="nav-btn" href="#link">Android</Nav.Link>
                        <Nav.Link className="nav-btn" href="#link">Donate</Nav.Link>
                        <Nav.Link className="nav-btn" href="#link">About</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Button variant="info" className="nav-btn">Download</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};
