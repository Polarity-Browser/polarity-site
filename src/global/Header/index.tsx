import React from 'react';

import { Navbar, Nav, Form, Button, FormControl, NavDropdown, NavItem } from 'react-bootstrap';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import './index.scss';
import { Link } from 'react-router-dom';

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
                <Link to="/">
                    <Navbar.Brand className="d-flex align-items-center">
                        <img className="mr-2" css={{ borderRadius: '3px' }} src="/images/icons/polarity_24x24.png" />{' '}
                        Polarity
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/windows">
                            <NavItem className="nav-btn">Windows</NavItem>
                        </Link>
                        <Link to="/android">
                            <NavItem className="nav-btn">Android</NavItem>
                        </Link>
                        <Link to="/changelog">
                            <NavItem className="nav-btn">Changelogs</NavItem>
                        </Link>
                        <Link to="/donate">
                            <NavItem className="nav-btn">Donate</NavItem>
                        </Link>
                        <Link to="/press">
                            <NavItem className="nav-btn">Press</NavItem>
                        </Link>
                        <Link to="/about">
                            <NavItem className="nav-btn">About</NavItem>
                        </Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Link to="/download">
                            <NavItem className="nav-btn">
                                <Button variant="info" className="nav-btn">
                                    Download
                                </Button>
                            </NavItem>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};
