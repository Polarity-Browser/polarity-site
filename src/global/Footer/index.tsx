import React from 'react';

import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';

import './index.scss';

interface FooterComponentProps {}

export const FooterComponent: React.FC<FooterComponentProps> = props => {
    return (
        <div className="footer text-left">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="h6">Browser</div>
                        <hr></hr>
                        <p className="footer__item">
                            <a href="#">Windows</a>
                        </p>
                        <p className="footer__item">
                            <a href="#">Android</a>
                        </p>
                    </div>
                    <div className="col">
                        <div className="h6">Header</div>
                        <hr></hr>
                        <p className="footer__item">
                            <a href="#">A</a>
                        </p>
                        <p className="footer__item">
                            <a href="#">B</a>
                        </p>
                    </div>
                    <div className="col">
                        <div className="h6">Header</div>
                        <hr></hr>
                        <p className="footer__item">
                            <a href="#">A</a>
                        </p>
                        <p className="footer__item">
                            <a href="#">B</a>
                        </p>
                    </div>
                    <div className="col">
                        <div className="h6">Contact</div>
                        <hr></hr>
                        <p className="footer__item">
                            <a href="#">A</a>
                        </p>
                        <p className="footer__item">
                            <a href="#">B</a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="container">
                <hr />
                <div className="d-flex justify-content-between">
                    <h5>Logo</h5>
                    <h5>Copyright</h5>
                </div>
            </div>
        </div>
    );
};
