import React from 'react';

import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';

interface FooterComponentProps {}

export const FooterComponent: React.FC<FooterComponentProps> = props => {
    return (
        <div>
            
            <h6 className="white uppercase">Houseable</h6>
            <div className="content">
                <div className="divider"></div>
                <div className="row">
                    <div className="col-3">
                        <ul className="no-bullets">
                            <li className="footer-list-title">Kitchen</li>
                            <a href="#">
                                <li className="list-item">Ovens</li>
                            </a>
                            <a href="#">
                                <li className="list-item">Ranges</li>
                            </a>
                            <a href="#">
                                <li className="list-item">Microwaves</li>
                            </a>
                            <a href="#">
                                <li className="list-item">Blenders</li>
                            </a>
                            <a href="#">
                                <li className="list-item">Refrigerator</li>
                            </a>
                            <a href="#">
                                <li className="list-item">Dishwashers</li>
                            </a>
                        </ul>
                    </div>
                    <div className="col-3">
                        <ul className="no-bullets">
                            <li className="footer-list-title">Audio</li>
                            <a href="#">
                                <li className="list-item">Sound Systems</li>
                            </a>
                            <a href="#">
                                <li className="list-item">Speakers</li>
                            </a>
                            <a href="#">
                                <li className="list-item">Subwoofers</li>
                            </a>
                            <a href="#">
                                <li className="list-item">Accessories</li>
                            </a>
                        </ul>
                    </div>
                    <div className="col-3">
                        <ul className="no-bullets">
                            <li className="footer-list-title">Cameras</li>
                            <a href="#">
                                <li className="list-item">Accessories</li>
                            </a>
                        </ul>
                    </div>
                    <div className="col-3">
                        <ul className="no-bullets">
                            <li className="footer-list-title">Energy</li>
                            <a href="#">
                                <li className="list-item">Cables</li>
                            </a>
                            <a href="#">
                                <li className="list-item">Inverters</li>
                            </a>
                            <a href="#">
                                <li className="list-item">Accessories</li>
                            </a>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col-3">
                        <ul className="no-bullets">
                            <li className="footer-list-title">Services</li>
                            <a href="#">
                                <li className="list-item">Design</li>
                            </a>
                            <a href="#">
                                <li className="list-item">Robots</li>
                            </a>
                        </ul>
                    </div>
                    <div className="col-3">
                        <ul className="no-bullets">
                            <li className="footer-list-title">About Us</li>
                            <a href="#">
                                <li className="list-item">Our Story</li>
                            </a>
                            <a href="#">
                                <li className="list-item">Global Partners</li>
                            </a>
                            <a href="#">
                                <li className="list-item">Careers</li>
                            </a>
                        </ul>
                    </div>
                    <div className="col-3">
                        <ul className="no-bullets">
                            <li className="footer-list-title">Support</li>
                            <a href="#">
                                <li className="list-item">Help</li>
                            </a>
                            <a href="#">
                                <li className="list-item">Forum</li>
                            </a>
                            <a href="#">
                                <li className="list-item">Locate a Store</li>
                            </a>
                            <a href="#">
                                <li className="list-item">Contact Us</li>
                            </a>
                        </ul>
                    </div>
                    <div className="col-3 u-text-center">
                        <ul className="no-bullets">
                            <li className="footer-list-title">Social</li>
                            <div className="level">
                                <div className="col">
                                    <a href="#">
                                        <span className="icon">
                                            <i className="fa fa-wrapper fa-facebook large"></i>
                                        </span>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="#">
                                        <span className="icon">
                                            <i className="fa fa-wrapper fa-twitter large"></i>
                                        </span>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="#">
                                        <span className="icon">
                                            <i className="fa fa-wrapper fa-instagram large"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
