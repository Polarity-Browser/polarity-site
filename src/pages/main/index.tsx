import React from 'react';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import './index.scss';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

interface MainProps {}

export const Main: React.FC<MainProps> = props => {
    return (
        <div>
            <div
                className="splash"
                css={{
                    alignItems: 'center',
                    display: 'flex',
                    overflow: 'hidden'
                }}
            >
                <div
                    className="w-100"
                    css={{
                        zIndex: 1100
                    }}
                >
                    <div className="display-3 text-left pb-5 ">A better browsing experience starts here.</div>
                    <div className="row mt-5">
                        <div className="col-lg-5 text-left">
                            <p className="lead">
                                A feature packed, fast, secure, stable, and highly customizable web browser that offers
                                the latest web standards.
                            </p>
                            <br />
                            <p className="lead">
                                Polarity enhances your privacy with adblocking and tracking protection built in. All
                                these aspects of Polarity help deliver a unique browsing experience to help you enjoy
                                the best of what the web has to offer.
                            </p>
                            <br />
                            <p>
                                Polarity is currently still in development, sign up for our newslatter for all the
                                latest updates.
                            </p>

                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Your email address"
                                    aria-label="Your email address"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                    <Button variant="info">Receive Updates</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </div>
                        <div className="col-lg-7 splash__img">
                            {/* <img src="https://via.placeholder.com/1000x500" css={{
                                    maxWidth: '100%',
                                    height: 'auto'
                            }} /> */}
                            <picture
                                css={{
                                    zIndex: 1001
                                }}
                            >
                            </picture>
                        </div>
                    </div>
                </div>
                <div className="polygons d-none d-lg-block">
                    <div className="polygons__list">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </div>
                </div>
            </div>

            <section className="d-flex" css={{
                height: '100vh'
            }}>
                <div className="container">
                    <div className="row h-100 align-items-center">
                        <div className="col-lg-6 text-left justify-content-left">
                            <h3 className="h3 mb-4" css={{
                                color: '#2a4b78',
                                fontWeight: 'bold'
                            }}>Efficiency comes first.</h3>
                            <hr
                                css={{
                                    background: 'linear-gradient(to right, #feac5e, #c779d0, #4bc0c8)',
                                    borderRadius: '1rem',
                                    height: '5px',
                                    margin: '2rem 0',
                                    maxWidth: '300px'
                                }}
                            />
                            <p className="responsive-lead">Polarity is designed with efficiency in mind to be able to run on lower end hardware such as tablets and older PCs. Even with its multi-process architecture, Polarity is optimized to reduce bloat and memory leaks that could consume unnecessary amounts of RAM.</p>
                        </div>
                        <div className="col-lg-6">
                            <p>Some image</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section--padded">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h5 className="h5 mb-4" css={{
                                color: '#2a4b78',
                                fontWeight: 'bold',
                                letterSpacing: '0.05rem',
                                textTransform: 'uppercase'
                            }}>Close less and do more.</h5>
                            <p className="responsive-p">Polarity's active garbage collector optimizes RAM and resource consumption in Polarity to take as little RAM as possible. Polarity is the most efficient web browser ever developed. So instead of closing programs to free up space, Polarity allows you to open more to do more.</p>
                        </div>
                        <div className="col-lg-6">
                            <h5 className="h5 mb-4" css={{
                                color: '#2a4b78',
                                fontWeight: 'bold',
                                letterSpacing: '0.05rem',
                                textTransform: 'uppercase'
                            }}>Power Saver</h5>
                            <p className="responsive-p">Extend your laptop's battery life up to 45% by simply enabling Power Saver mode. This will block intrusive animations such as ads (Flash/GIF), disable WebGL, browser and website animations, and enable Google's QUIC protocol to help compress and speed up browsing speeds.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
