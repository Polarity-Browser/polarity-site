import React from 'react';

import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';

interface HeaderComponentProps {}

export const HeaderComponent: React.FC<HeaderComponentProps> = props => {
    return (
        <div>
            <h6 className="white uppercase">Cirrus</h6>
            <div className="content">
                <div className="divider"></div>
                <div className="row">
                    <div className="col-3">
                        <ul className="no-bullets">
                            <a href="../animations">
                                <li className="list-item">Animations</li>
                            </a>
                            <a href="../buttons">
                                <li className="list-item">Buttons</li>
                            </a>
                            <a href="../components">
                                <li className="list-item">Components</li>
                            </a>
                        </ul>
                    </div>
                    <div className="col-3">
                        <ul className="no-bullets">
                            <a href="../font">
                                <li className="list-item">Font</li>
                            </a>
                            <a href="../footer">
                                <li className="list-item">Footer</li>
                            </a>
                            <a href="../forms">
                                <li className="list-item">Forms</li>
                            </a>
                        </ul>
                    </div>
                    <div className="col-3">
                        <ul className="no-bullets">
                            <a href="../header">
                                <li className="list-item">Header</li>
                            </a>
                            <a href="../layout">
                                <li className="list-item">Layout</li>
                            </a>
                            <a href="../links">
                                <li className="list-item">Links</li>
                            </a>
                        </ul>
                    </div>
                    <div className="col-3">
                        <ul className="no-bullets">
                            <a href="../lists">
                                <li className="list-item">Lists</li>
                            </a>
                            <a href="../tables">
                                <li className="list-item">Table</li>
                            </a>
                            <a href="../utils">
                                <li className="list-item">Util</li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="subtitle">
                The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The
                website content is licensed{' '}
                <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                    CC BY-NC-SA 4.0
                </a>
                .
            </p>
            <p>
                Made with <i className="fa fa-heart pulse" aria-hidden="true"></i> by{' '}
                <a href="http://stanleylim.me" target="_blank">
                    Stanley Lim
                </a>
            </p>
        </div>
    );
};
