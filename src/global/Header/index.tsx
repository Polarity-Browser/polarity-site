import React from 'react';

import { Navbar, Nav, Form, Button, FormControl, NavDropdown } from 'react-bootstrap';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

interface HeaderComponentProps {}

export const HeaderComponent: React.FC<HeaderComponentProps> = props => {
    return (
        <div>
            <Navbar
                bg="dark"
                variant="dark"
                expand="lg"
                css={{
                    position: 'fixed',
                    width: '100%',
                    zIndex: 1000
                }}
            >
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};
