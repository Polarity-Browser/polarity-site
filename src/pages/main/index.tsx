import React from 'react';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import './index.scss';
import { InputGroup, FormControl, Button, Nav } from 'react-bootstrap';

import { RamGraph } from './components';

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
                    <div className="display-3 text-left">A better browsing experience starts here.</div>
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
                                <img
                                    className="d-none d-lg-block"
                                    css={{
                                        maxWidth: 'none'
                                    }}
                                    srcSet="
            /images/landing.png 1x,
            /images/landing2x.png 2x, 
            /images/landing3x.png 3x"
                                    sizes="
            (min-width: 100px) 1559px, 
            (min-width: 2500px) 3118px, 
            (min-width: 3500px) 4677px,
            1000px"
                                    src="/images/landing.png"
                                />
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

            <section
                className="d-flex"
                css={{
                    height: '100vh'
                }}
            >
                <div className="container">
                    <div className="row h-100 align-items-center">
                        <div className="col-lg-6 text-left justify-content-left">
                            <h3
                                className="h3 mb-4"
                                css={{
                                    color: '#2a4b78',
                                    fontWeight: 'bold'
                                }}
                            >
                                Efficiency comes first.
                            </h3>
                            <hr
                                css={{
                                    background: 'linear-gradient(to right, #feac5e, #c779d0, #4bc0c8)',
                                    borderRadius: '1rem',
                                    height: '5px',
                                    margin: '2rem 0',
                                    maxWidth: '300px'
                                }}
                            />
                            <p className="responsive-lead">
                                Polarity is designed with efficiency in mind to be able to run on lower end hardware
                                such as tablets and older PCs. Even with its multi-process architecture, Polarity is
                                optimized to reduce bloat and memory leaks that could consume unnecessary amounts of
                                RAM.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <RamGraph />
                        
                        </div>
                    </div>
                </div>
            </section>

            <section className="section--padded section--wave section--text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-5">
                            <h5
                                className="h5 my-4"
                                css={{
                                    color: '#2a4b78',
                                    fontWeight: 'bold',
                                    letterSpacing: '0.05rem',
                                    textTransform: 'uppercase'
                                }}
                            >
                                🌵 Super Efficient
                            </h5>
                            <p className="responsive-p">
                                Polarity actively frees up unused resources within the browser to make room for other
                                apps and games running on your machine. Stop closing applications to free up memory and
                                multitask to your 💛's content.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <h5
                                className="h5 my-4"
                                css={{
                                    color: '#2a4b78',
                                    fontWeight: 'bold',
                                    letterSpacing: '0.05rem',
                                    textTransform: 'uppercase'
                                }}
                            >
                                ⚡️ Power Saver
                            </h5>
                            <p className="responsive-p">
                                Extend your laptop's battery life by enabling Power Saver mode. This will block
                                intrusive animations such as ads (Flash/GIF), disable WebGL, browser and website
                                animations, and enable Google's QUIC protocol to compress data and speed up browsing.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section--padded">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6"></div>
                        <div className="col-lg-6">
                            <h3 className="h3 font-bold">Stop snoopers in their tracks.</h3>
                            <p className="responsive-p">
                                Prevent websites from tracking your every movement online. Polarity will not track or
                                store your browsing history, accounts, sessions, and sensitive information while
                                protecting your digital footprint. It is more crucial than ever to protect your presence
                                online.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section--padded section--wave section--text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-5">
                            <h5
                                className="h5 my-4"
                                css={{
                                    color: '#2a4b78',
                                    fontWeight: 'bold',
                                    letterSpacing: '0.05rem',
                                    textTransform: 'uppercase'
                                }}
                            >
                                ✋ AdBlocking with Privoxy
                            </h5>
                            <p className="responsive-p">
                                De-clutter your browsing experience with{' '}
                                <a href="https://www.privoxy.org/" target="_blank">
                                    Privoxy's
                                </a>{' '}
                                native content filtering and privacy controls. You use Polarity's built-in filters or
                                add custom rules yourself.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <h5
                                className="h5 my-4"
                                css={{
                                    color: '#2a4b78',
                                    fontWeight: 'bold',
                                    letterSpacing: '0.05rem',
                                    textTransform: 'uppercase'
                                }}
                            >
                                💨 Browse with a Proxy or Tor
                            </h5>
                            <p className="responsive-p">
                                Polarity allows you to browse with any <b>SOCKS4/5</b> or <b>HTTPS</b> proxy to mask
                                your identity on the web. Not interested in free proxy lists? Polarity comes with{' '}
                                <b>Tor</b> configured right out of the box.
                            </p>
                        </div>
                        <div className="col-lg-6 mb-5">
                            <h5
                                className="h5 my-4"
                                css={{
                                    color: '#2a4b78',
                                    fontWeight: 'bold',
                                    letterSpacing: '0.05rem',
                                    textTransform: 'uppercase'
                                }}
                            >
                                🙈 Incognito Mode
                            </h5>
                            <p className="responsive-p">
                                In Private Mode, Polarity does not remember any of your history, cookies, or cache data
                                during your browsing session. All browsing data is automatically deleted upon exit. With{' '}
                                <b>Parallel Sessions</b>, each tab gets its own cache to create a safer browsing
                                environment.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <h5
                                className="h5 my-4"
                                css={{
                                    color: '#2a4b78',
                                    fontWeight: 'bold',
                                    letterSpacing: '0.05rem',
                                    textTransform: 'uppercase'
                                }}
                            >
                                🐙 Flexibility
                            </h5>
                            <p className="responsive-p">
                                Polarity focuses on giving you the power to choose what content is loaded and what
                                providers are used. Easily edit where you{' '}
                                <b>fetch your search results (Google vs DuckDuckGo for example)</b> and what
                                content/plugins are loaded while you browse.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section--padded">
                <div className="container">
                    <div className="row h-100 align-items-center">
                        <div className="col-lg-6 text-left justify-content-left">
                            <h3
                                className="h3 mb-4"
                                css={{
                                    color: '#2a4b78',
                                    fontWeight: 'bold'
                                }}
                            >
                                pBlock.
                            </h3>
                            <hr
                                css={{
                                    background: 'linear-gradient(to right, #feac5e, #c779d0, #4bc0c8)',
                                    borderRadius: '1rem',
                                    height: '5px',
                                    margin: '2rem 0',
                                    maxWidth: '300px'
                                }}
                            />
                            <p className="responsive-lead">
                                pBlock is an innovative way to granularly block content on any webpage. Block intrusive
                                ads, malicious scripts, and unsecure hosts with a single click.
                            </p>
                            <br />

                            <p className="responsive-p">
                                <b>Identity Masking</b>
                            </p>
                            <p className="responsive-p">
                                pBlock will automatically randomize Polarity's metadata every <b>25 minutes</b> to make
                                tracking difficult.
                            </p>
                            <br />

                            <p className="responsive-p">
                                <b>Faster Speeds</b>
                            </p>
                            <p className="responsive-p">
                                In the process, pBlock can also help reduce load times and CPU/GPU activity by blocking
                                memory intensive content.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <picture>
                                <img src="http://polarity.x10.mx/browser/img/pBlock.PNG" />
                            </picture>
                        </div>
                    </div>

                    <div className="mt-5">
                        <h3 className="text-center">Does pBlock make a difference?</h3>

                        <p className="responsive-p">
                            <b>Before &mdash;</b> 9 seconds
                        </p>
                        <img className="w-100" src="http://polarity.x10.mx/browser/img/networkBefore.PNG" />
                        <hr className="mt-4" />
                        <p className="responsive-p">
                            <b>After &mdash;</b> 5.5 seconds
                        </p>
                        <img className="w-100" src="http://polarity.x10.mx/browser/img/networkAfter.PNG" />
                    </div>

                    <div className="row mt-5">
                        <div className="col-10">
                            <p className="responsive-p">
                                This was tested on a popular download website with various advertisements embedded on
                                the page. Both results were started from a <b>cold load</b> of the browser with no
                                cache.
                            </p>
                        </div>
                        <div className="col-2">
                            <img src="http://polarity.x10.mx/browser/img/legend.PNG" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section--padded text-center">
                <div className="container">
                    <h3
                        className="h3 mb-4"
                        css={{
                            color: '#2a4b78',
                            fontWeight: 'bold'
                        }}
                    >
                        Security
                    </h3>
                    <hr
                        css={{
                            background: 'linear-gradient(to right, #feac5e, #c779d0, #4bc0c8)',
                            borderRadius: '1rem',
                            height: '5px',
                            margin: '2rem auto',
                            maxWidth: '300px'
                        }}
                    />
                    <p className="responsive-lead">
                        With security, Polarity has you covered. Get alerts for potentially harmful sites and steer
                        clear from phishing sites powered by{' '}
                        <a href="https://www.phishtank.com/" target="_blank">
                            PhishTank
                        </a>
                        .
                    </p>
                </div>
                <picture>
                    <img src="/images/security.png" />
                </picture>
            </section>

            <section className="section--padded">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <picture>
                                <img className="w-100" src="/images/speed.png" />
                            </picture>
                        </div>
                        <div className="col-lg-4">
                            <h3
                                className="h3 mb-4"
                                css={{
                                    color: '#2a4b78',
                                    fontWeight: 'bold'
                                }}
                            >
                                Speed
                            </h3>
                            <hr
                                css={{
                                    background: 'linear-gradient(to right, #feac5e, #c779d0, #4bc0c8)',
                                    borderRadius: '1rem',
                                    height: '5px',
                                    margin: '2rem 0',
                                    maxWidth: '300px'
                                }}
                            />
                            <p className="responsive-lead">
                                With security, Polarity has you covered. Get alerts for potentially harmful sites and
                                steer clear from phishing sites powered by{' '}
                                <a href="https://www.phishtank.com/" target="_blank">
                                    PhishTank
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
