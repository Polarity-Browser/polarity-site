import React from 'react';

import { Navbar, Nav, Form, Button, FormControl, Row } from 'react-bootstrap';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import './index.scss';
import { Link } from 'react-router-dom';

interface FooterComponentProps {}

export const FooterComponent: React.FC<FooterComponentProps> = props => {
    return (
        <div className="footer text-left">
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <div className="h6">Versions</div>
                        <hr></hr>
                        <p className="footer__item">
                            <Link to="/windows">Windows</Link>
                        </p>
                        <p className="footer__item">
                            <Link to="/android">Android</Link>
                        </p>
                    </div>
                    <div className="col-md">
                        <div className="h6">Polarity</div>
                        <hr></hr>
                        <p className="footer__item">
                            <Link to="/privacy">Privacy</Link>
                        </p>
                        <p className="footer__item">
                            <Link to="/press">Press</Link>
                        </p>
                        <p className="footer__item">
                            <Link to="/donate">Donate</Link>
                        </p>
                    </div>
                    <div className="col-md">
                        <div className="h6">Contributing</div>
                        <hr></hr>
                        <p className="footer__item">
                            <Link to="/contact">Bug Report</Link>
                        </p>
                        <p className="footer__item">
                            <a href="https://github.com/Polarity-Browser" target="_blank" rel="noopener noreferrer">Github</a>
                        </p>
                    </div>
                    <div className="col-md">
                        <div className="h5">
                            <b>About Polarity</b>
                        </div>
                        <p>
                            Polarity is a project that began as a simple web browser. Polarity was created to bring web
                            browsing with efficiency, speed, privacy.
                        </p>
                        <p>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.facebook.com/polaritybrowser"
                            >
                                <button className="btn-social">
                                    <i className="fab fa-facebook-f"></i>
                                </button>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/polaritybrowser">
                                <button className="btn-social">
                                    <i className="fab fa-twitter"></i>
                                </button>
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="container">
                <hr />
                <div className="d-flex justify-content-between">
                    <h4 className="d-flex"><img className="mr-2" css={{ borderRadius: '3px', width: '28px' }} src="/images/icons/polarity_24x24.png" /> Polarity</h4>
                    <h5>&copy; Polarity {new Date().getFullYear()}</h5>
                </div>
            </div>
        </div>
    );
};
