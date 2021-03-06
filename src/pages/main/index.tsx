import React from 'react';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { InputGroup, FormControl, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { RamGraph } from './components';
import { Wave } from '../../global';

import './index.scss';

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
                    <div className="display-4 text-left font-bold">A better browsing experience starts here.</div>
                    <div className="row mt-5">
                        <div className="col-lg-5 text-left">
                            <p className="lead font-bold">
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
                                Polarity 10 is out! However, feel free to sign up for our newsletter for updates on future projects.
                            </p>

                            <form
                                action="https://netlify.us4.list-manage.com/subscribe/post?u=987061753671eccaad87a4bc0&amp;id=be8c0da93c"
                                method="post"
                                id="mc-embedded-subscribe-form"
                                name="mc-embedded-subscribe-form"
                                target="_blank"
                                noValidate
                            >
                                <InputGroup
                                    className="mb-3"
                                    css={{
                                        boxShadow: '0 36px 51px 0 rgba(0, 0, 0, .1)'
                                    }}
                                >
                                    <FormControl
                                        placeholder="Your email address"
                                        aria-label="Your email address"
                                        aria-describedby="basic-addon2"
                                        type="email"
                                        name="EMAIL"
                                        id="mce-EMAIL"
                                        required
                                        css={{
                                            height: '4rem'
                                        }}
                                    />
                                    <InputGroup.Append>
                                        <Button type="submit" variant="info">
                                            Receive Updates
                                        </Button>
                                    </InputGroup.Append>
                                </InputGroup>
                                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                                    <input
                                        type="text"
                                        name="b_987061753671eccaad87a4bc0_be8c0da93c"
                                        tabIndex={-1}
                                        value=""
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-7 splash__img">
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
                className="section--padded d-flex"
                css={{
                    minHeight: '100vh'
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
                        <div className="col-lg-6 text-center">
                            <div>
                                <RamGraph />
                            </div>
                            <span>
                                Test conducted on Windows 10 <sup>1</sup>.
                            </span>
                        </div>

                        <div
                            className="my-5"
                            css={{
                                backgroundColor: '#eee',
                                borderRadius: '.25rem',
                                color: '#888',
                                fontSize: '.8rem',
                                padding: '.5rem'
                            }}
                        >
                            <ol>
                                <li>
                                    Benchmark conducted by Polarity in February 2020 using a production 1.8GHz quad-core
                                    Intel Core i7-based 17-inch Asus Vivobook Pro with 16GB RAM, 256GB SSD, 1TB HDD and
                                    Windows 10.0.18362.592. Browsers tested included default installations of Polarity 10.0.0 pre-release,
                                    Firefox 72.0, Chrome 80.0.3987.87, and Edge 80.0.361.48.
                                </li>
                            </ol>
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

            <section
                className="section--padded"
                css={{
                    minHeight: '100vh'
                }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <picture>
                                <img src="/images/privacy.png" />
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
                                Stop snoopers in their tracks.
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
                                <a href="https://www.privoxy.org/" target="_blank" rel="noopener noreferrer">
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
                                <b>Total Protection</b>
                            </p>
                            <p className="responsive-p">
                                Set <b>per-site rules</b> and block <b>phishing sites</b>, <b>malicious iframes</b>,{' '}
                                <b>mixed SSL content</b>, and more with a single click.
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
                                <img src="/images/pBlock.png" />
                            </picture>
                        </div>
                    </div>

                    <div className="mt-5">
                        <h3 className="text-center">Does pBlock make a difference?</h3>

                        <p className="responsive-p">
                            <b>Before &mdash;</b> 9 seconds
                        </p>
                        <img className="w-100" src="/images/networkBefore.PNG" />
                        <hr className="mt-4" />
                        <p className="responsive-p">
                            <b>After &mdash;</b> 5.5 seconds
                        </p>
                        <img className="w-100" src="/images/networkAfter.PNG" />
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-10">
                            <p className="responsive-p">
                                This was tested on a popular download website with various advertisements embedded on
                                the page. Both results were started from a <b>cold load</b> of the browser with no
                                cache.
                            </p>
                        </div>
                        <div className="col-md-2">
                            <img src="/images/legend.PNG" />
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
                        Stay Secure.
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
                        <a href="https://www.phishtank.com/" target="_blank" rel="noopener noreferrer">
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
                                Performance is key.
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
                                Powered by both Chromium and Trident, Polarity supports the latest web standards along
                                with backwards compatibility. With hardware acceleration and WebGL support in both
                                engines, Polarity delivers an immersive experience that puts the web first.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="section--padded container text-center">
                <p className="display-4 font-bold">All this and more.</p>
                <p className="responsive-lead">
                    Still not convinced? Check out all the other features that Polarity has to offer.
                </p>
                <br />
                <Link to="/windows">
                    <Button variant="info" size="lg" className="btn-polarity">
                        Explore <i className="fas fa-chevron-right ml-2"></i>
                    </Button>
                </Link>
            </div>

            <Wave bottomColor="#640e8e" topColor="#fff" />
            <section className="section--padded section--download text-white">
                <div className="container">
                    <p className="display-4 font-bold mb-5">See what others have said about us.</p>

                    <p className="responsive-lead testimonial">
                        <i>
                            “Using the 'Web Filter', you can prevent any automatic redirection to malicious websites,
                            protecting your system's security.”{' '}
                        </i>
                        &mdash; Softpedia
                    </p>

                    <p className="responsive-lead testimonial">
                        <i>
                            “Polarity web browser is meant for any user who requires a lighter, faster, safer, and more
                            stable browser that doesn't track you with the features of modern day web browsers.”{' '}
                        </i>
                        &mdash; Softonic
                    </p>

                    <p className="responsive-lead testimonial">
                        <i>
                            “Web browser aficionados will want to check out Polarity, which integrates Google's Chromium
                            and Internet Explorer's Trident Web rendering engines in one program.”{' '}
                        </i>
                        &mdash; CNET
                    </p>

                    <p className="responsive-lead testimonial">
                        <i>
                            “It consumes less CPU & RAM compare to other browser and deliver an excellent browsing
                            experience.”{' '}
                        </i>
                        &mdash; Geekflare
                    </p>

                    <div className="text-center">
                        <p className="font-bold display-0">Make the switch.</p>
                        <p className="responsive-lead">
                            With Polarity's rich functionality, flexibility, and incredible speed, Polarity brings the
                            best browsing experience in a small package.
                        </p>

                        <Link to="/download">
                            <Button
                                variant="info"
                                size="lg"
                                className="btn-polarity mt-3"
                                css={{
                                    borderRadius: '100px',
                                    fontSize: '1.75rem'
                                }}
                            >
                                Download Polarity for Windows <i className="fas fa-chevron-down ml-2"></i>
                                <p
                                    css={{
                                        fontSize: '1rem',
                                        margin: 0
                                    }}
                                >
                                    Ready for Windows 7, 8, 8.1, 10
                                </p>
                            </Button>
                        </Link>

                        <p className="mt-2">
                            Or Download the{' '}
                            <a
                                href="https://sourceforge.net/projects/polaritybrowser/files/Polarity%20Portable.zip/download"
                                rel="noopener noreferrer"
                            >
                                Portable Version
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};
