import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Button } from 'react-bootstrap';

import './index.scss';
import { Wave } from '../../global';

interface WindowsProps {}

export const Windows: React.FC<WindowsProps> = props => {
    return (
        <div>
            <div
                className="cover"
                css={{
                    alignItems: 'center',
                    display: 'flex',
                    paddingBottom: 0,
                    overflow: 'hidden'
                }}
            >
                <div
                    className="w-100 text-center"
                    css={{
                        zIndex: 1100
                    }}
                >
                    <div className="display-3 font-bold mb-5 text-white">Unleash the web.</div>
                    <picture>
                        <img src="/images/windows_cropped.png" />
                    </picture>
                </div>
            </div>
            <section
                className="section--padded pb-0"
                css={{
                    backgroundColor: '#edf5ff',
                    boxShadow: '0px -5px 20px 12px rgba(0,0,0,0.1)'
                }}
            >
                <div className="container text-center">
                    <p className="h1">
                        Polarity is <b className="font-bold">the</b> alternative browser.
                    </p>
                    <p className="responsive-lead">
                        Polarity was designed to be much more <b>energy efficient</b> and light weight than other
                        browsers, so you can browse longer on a single charge. Built in <b>privacy features</b> such as
                        DoNotTrack and Privoxy allow users to browse with confidence. With a wide selection of apps,
                        themes, and extensions, you'll feel right at home with Polarity.
                    </p>
                    <Button
                        variant="info"
                        size="lg"
                        className="btn-polarity mt-3"
                        css={{
                            borderRadius: '100px'
                        }}
                    >
                        Download Polarity <i className="fas fa-chevron-down ml-2"></i>
                    </Button>
                </div>
            </section>
            <Wave bottomColor="#fff" topColor="#edf5ff" />
            <section
                className="section--padded pt-0"
                css={{
                    backgroundColor: '#fff'
                }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <p className="h2 mb-3 font-bold">A Clean User Interface</p>
                            <p className="responsive-lead">
                                Polarity is designed to give precedence to online content. Therefore it only made sense
                                to design the user interface to be as unobtrusive as possible to create an immersive
                                browsing experience.
                            </p>
                        </div>
                        <div className="col-lg-7">
                            <picture>
                                <img src="/images/design.png" />
                            </picture>
                        </div>
                    </div>
                </div>
            </section>

            <hr
                css={{
                    background: 'linear-gradient(to right, #feac5e, #c779d0, #4bc0c8)',
                    borderRadius: '1rem',
                    height: '5px',
                    margin: '0 auto',
                    maxWidth: '30%'
                }}
            />
            <section
                className="section--padded"
                css={{
                    backgroundColor: '#fff !important'
                }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <picture>
                                <img src="/images/customizability.png" />
                            </picture>
                        </div>
                        <div className="col-lg-5">
                            <p className="h2 mb-3 font-bold">Customize Pretty Much Anything</p>
                            <p className="responsive-lead">
                                Customize Polarity the way you want it. The browser offers very granular configurations
                                for pretty much anything you can imagine, ranging from themes to performance to
                                security.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <hr
                css={{
                    background: 'linear-gradient(to right, #feac5e, #c779d0, #4bc0c8)',
                    borderRadius: '1rem',
                    height: '5px',
                    margin: '0 auto',
                    maxWidth: '30%'
                }}
            />
            <section
                className="section--padded"
                css={{
                    backgroundColor: '#fff !important'
                }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <p className="h2 mb-3 font-bold">Just Around the Corner</p>
                            <p className="responsive-lead">
                                With so many features, we needed to come up with a design that provided quick access
                                without hiding them in different parts of the browser. The sidebar houses common
                                commands, apps, pBlock, and a Reading List neatly tucked away to the right side.
                            </p>
                        </div>
                        <div className="col-lg-7">
                            <picture>
                                <img src="/images/sidebar.png" />
                            </picture>
                        </div>
                    </div>
                </div>
            </section>
            <hr
                css={{
                    background: 'linear-gradient(to right, #feac5e, #c779d0, #4bc0c8)',
                    borderRadius: '1rem',
                    height: '5px',
                    margin: '0 auto',
                    maxWidth: '30%'
                }}
            />
            <section
                className="section--padded"
                css={{
                    backgroundColor: '#fff !important'
                }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <picture>
                                <img src="/images/reading.png" />
                            </picture>
                        </div>
                        <div className="col-lg-5">
                            <p className="h2 mb-3 font-bold">Read on the Go</p>
                            <p className="responsive-lead">
                                Have an article you want to read but don't have the time? Add it to the Reading List. In
                                addition to keeping track of your articles, Polarity also gives you{' '}
                                <strong>offline</strong> access when you're on the go.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <hr
                css={{
                    background: 'linear-gradient(to right, #feac5e, #c779d0, #4bc0c8)',
                    borderRadius: '1rem',
                    height: '5px',
                    margin: '0 auto',
                    maxWidth: '30%'
                }}
            />
            <section className="section--padded">
                <div
                    css={{
                        margin: '0 auto',
                        maxWidth: '1440px'
                    }}
                >
                    <div className="row text-center">
                        <div className="col-lg-6">
                            <p className="h1">AdBlock</p>
                        </div>
                        <div className="col-lg-6">
                            <p className="h1">Sharing</p>
                        </div>
                        <div className="col-lg-6">
                            <p className="h1">Pin Sites</p>
                        </div>
                        <div className="col-lg-6">
                            <p className="h1">Notifications</p>
                        </div>
                        <div className="col-lg-6">
                            <p className="h1">Voice</p>
                        </div>
                        <div className="col-lg-6">
                            <p className="h1">Control Center</p>
                        </div>
                        <div className="col-lg-6">
                            <p className="h1">PolarPass</p>
                        </div>
                        <div className="col-lg-6">
                            <p className="h1">PolarSync</p>
                        </div>
                        <div className="col-lg-6">
                            <p className="h1">PolarShot</p>
                        </div>
                        <div className="col-lg-6">
                            <p className="h1">Tab Pause</p>
                        </div>
                        <div className="col-lg-6">
                            <p className="h1">Nightmode</p>
                        </div>
                        <div className="col-lg-6">
                            <p className="h1">Reader</p>
                        </div>
                        <div className="col-lg-6">
                            <p className="h1">RSS</p>
                        </div>
                        <div className="col-lg-6">
                            <p className="h1">Developer Tools</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
