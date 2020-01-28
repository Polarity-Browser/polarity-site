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
                <Navbar.Brand href="#home">Polarity</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto"></Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};
