import React from 'react';

import { Navbar, Nav, Form, Button, FormControl, Row } from 'react-bootstrap';

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
                        <div className="h6">Polarity</div>
                        <hr></hr>
                        <p className="footer__item">
                            <a href="#">Privacy</a>
                        </p>
                        <p className="footer__item">
                            <a href="#">Press</a>
                        </p>
                    </div>
                    <div className="col">
                        <div className="h6">Contributing</div>
                        <hr></hr>
                        <p className="footer__item">
                            <a href="#">Bug Report</a>
                        </p>
                        <p className="footer__item">
                            <a href="#">Github</a>
                        </p>
                    </div>
                    <div className="col">
                        <div className="h5"><b>About Polarity</b></div>
                        <p>Polarity is a project that began as a simple web browser. Polarity was created to bring web browsing with efficiency, speed, privacy.</p>
                        <p>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/polaritybrowser"><button className="btn-social"><i className="fab fa-facebook-f"></i></button></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/polaritybrowser"><button className="btn-social"><i className="fab fa-twitter"></i></button></a>
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
