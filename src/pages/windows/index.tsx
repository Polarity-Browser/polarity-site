import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Button } from 'react-bootstrap';
import { Wave } from '../../global';
import { Link } from 'react-router-dom';

import './index.scss';

interface WindowsProps {}

export const Windows: React.FC<WindowsProps> = props => {
    return (
        <div>
            <div
                className="cover"
                css={{
                    alignItems: 'center',
                    display: 'flex',
                    flexFlow: 'column-reverse',
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
                        <img
                            src="/images/windows_cropped.png"
                            srcSet="
            /images/windows_cropped.png 1x,
            /images/windows2x.png 2x, 
            /images/windows3x.png 3x"
                            sizes="
            (min-width: 100px) 1559px, 
            (min-width: 2500px) 3118px, 
            (min-width: 3500px) 4677px,
            1000px"
                        />
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
                    <Link to="/download">
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
                    </Link>
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
                <div className="container text-center">
                    <p className="h2 mb-3 font-bold">Browse for a Cause</p>
                    <p className="responsive-lead">
                        In 2016, Polarity partnered with{' '}
                        <a href="https://ecosia.org" target="_blank" rel="noopen noreferrer">
                            Ecosia
                        </a>{' '}
                        in a mission to help reforest biodiversity hotspots around the world. Every search will go
                        towards tree planting projects across the globe.
                    </p>
                    <picture>
                        <img src="/images/ecosia.png" />
                    </picture>
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
                    <div className="row text-center mx-0">
                        <div className="col-lg-6 my-5">
                            <p className="h1">AdBlock</p>
                            <p className="responsive-p">
                                With the power of{' '}
                                <a target="_blank" href="https://easylist.adblockplus.org/en" rel="noopener noreferrer">
                                    EasyList / EasyPrivacy
                                </a>{' '}
                                combined with the efficiency of{' '}
                                <a target="_blank" href="http://www.privoxy.org/" rel="noopener noreferrer">
                                    Privoxy
                                </a>
                                , Polarity comes built in with the latest filters to remove intrusive, power wasting,
                                and potentially malicious adverts from your content. This reduces the chance for
                                infection and saves data.
                            </p>
                            <picture>
                                <img src="/images/adblock.png" />
                            </picture>
                        </div>
                        <div className="col-lg-6 my-5">
                            <p className="h1">Sharing</p>
                            <p className="responsive-p">
                                Polarity's built in sharing tools allow you to share with any social network instantly.
                            </p>
                            <picture>
                                <img src="/images/share.png" />
                            </picture>
                        </div>
                        <div className="col-lg-6 my-5">
                            <p className="h1">Pin Sites</p>
                            <p className="responsive-p">
                                Pinned tabs are neatly tucked away to the side of the browser for easy access for the
                                sites you use most &mdash; like Facebook or Twitter. Pinned tabs are always saved on
                                exit and load automatically on startup.
                            </p>
                            <picture>
                                <img src="/images/pin.png" />
                            </picture>
                        </div>
                        <div className="col-lg-6 my-5">
                            <p className="h1">Notifications</p>
                            <p className="responsive-p">
                                Pinned tabs also alert you for incoming notifications or updates to the site. The tab
                                will blink amber to notify you of any updates.
                            </p>
                            <picture>
                                <img src="/images/notifications.png" />
                            </picture>
                        </div>
                        <div className="col-lg-6 my-5">
                            <p className="h1">Voice</p>
                            <p className="responsive-p">
                                Polarity is voice activated and can listen to your commands or search queries and
                                instantly take you to the website that has the most relevant content without searching.
                                Just click the mic to start.
                            </p>
                            <picture>
                                <img src="/images/voice.jpg" />
                            </picture>
                        </div>
                        <div className="col-lg-6 my-5">
                            <p className="h1">Control Center</p>
                            <p className="responsive-p">
                                Control Center allows you to easily manage and find all your open tabs as well as
                                execute commands in a simple and intuitive user interface.
                            </p>
                            <picture>
                                <img src="/images/control.png" />
                            </picture>
                        </div>
                        <div className="col-lg-6 my-5">
                            <p className="h1">PolarPass</p>
                            <p className="responsive-p">
                                PolarPass allows users to store conveniently manage their online credentials all
                                encrypted with <b>AES-256</b> offline.
                            </p>
                            <picture>
                                <img src="/images/polarpass.png" />
                            </picture>
                        </div>
                        <div className="col-lg-6 my-5">
                            <p className="h1">PolarSync</p>
                            <p className="responsive-p">
                                With PolarSync, users can easily backup and restore their pervious browsing
                                configuration on different machines with Polarity.
                            </p>
                            <picture>
                                <img src="/images/polarsync.png" />
                            </picture>
                        </div>
                        <div className="col-lg-6 my-5">
                            <p className="h1">PolarShot</p>
                            <p className="responsive-p">
                                Easily take screenshots right in the browser without any additional plugins or
                                extensions. Simply launch it from the action menu and hold and drag.
                            </p>
                            <picture>
                                <img src="/images/polarshot.jpg" />
                            </picture>
                        </div>
                        <div className="col-lg-6 my-5">
                            <p className="h1">Tab Pause</p>
                            <p className="responsive-p">
                                Stop trading memory usage with convenience with Tab Pause in Polarity. With Tab Pause,
                                you can keep all of your open tabs without worrying about high memory usage. Tabs are
                                automatically paused after a user set period of time and resumes when selected.
                            </p>
                            <picture>
                                <img src="/images/tabpause.png" />
                            </picture>
                        </div>
                        <div className="col-lg-6 my-5">
                            <p className="h1">Nightmode</p>
                            <p className="responsive-p">
                                Browsing the web with bright backgrounds can be extremely tiring for long durations,
                                especially at night. Night mode aims to make browsing more comfortable by dimming bright
                                backgrounds to reduce eye strain.
                            </p>
                            <picture>
                                <img src="/images/night.png" />
                            </picture>
                        </div>
                        <div className="col-lg-6 my-5">
                            <p className="h1">Reader</p>
                            <p className="responsive-p">
                                Polarity comes integrated with Instapaper. For regular articles, enter reader mode to
                                get a seamless reading experience with adjustable fonts and backgrounds.
                            </p>
                            <picture>
                                <img src="/images/reader.png" />
                            </picture>
                        </div>
                        <div className="col-lg-6 my-5">
                            <p className="h1">RSS</p>
                            <p className="responsive-p">Keep all your RSS feeds managed with Feedly.</p>
                            <picture>
                                <img src="/images/rss.png" />
                            </picture>
                        </div>
                        <div className="col-lg-6 my-5">
                            <p className="h1">Developer Tools</p>
                            <p className="responsive-p">
                                Document Explorer allows you to debug both in Chromium and Trident. Element parsing and
                                debugging has drastically decreased in time along with the addition of new features.
                            </p>
                            <picture>
                                <img src="/images/dev.png" />
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
            <section className="section--padded">
                <div
                    css={{
                        margin: '0 auto',
                        maxWidth: '1440px'
                    }}
                >
                    <div className="row text-center mx-0">
                        <div className="col-lg-4 my-5">
                            <p className="h3">Parallel Sessions</p>
                            <p className="responsive-p">
                                For users with multiple accounts across different services, it can be hard to be able to
                                keep track of updates that come along. Parallel Sessions is designed to allow the users
                                to be able to access services with <b>multiple</b> accounts in one browser.
                            </p>
                        </div>
                        <div className="col-lg-4 my-5">
                            <p className="h3">Trident Mode</p>
                            <p className="responsive-p">
                                Polarity also offers an option to utilize the Trident engine for backwards compatibility
                                with other websites.
                            </p>
                        </div>
                        <div className="col-lg-4 my-5">
                            <p className="h3">Aliases</p>
                            <p className="responsive-p">
                                Set aliases for your favorite websites. Instead of typing <b>"facebook"</b> for{' '}
                                <b>"facebook.com"</b>, you alias <b>"fb"</b> to <b>"facebook.com"</b>. If that's too
                                slow, bind your favorite websites to keyboard shortcuts instead.
                            </p>
                        </div>
                        <div className="col-lg-4 my-5">
                            <p className="h3">UserScripts/UserStyles</p>
                            <p className="responsive-p">
                                Polarity also supports extensions from Greasy Fork, OpenUserJS, Userscripts.org, and
                                Userstyles to offer additional functionality to each website.
                            </p>
                        </div>
                        <div className="col-lg-4 my-5">
                            <p className="h3">Keyboard Shortcuts</p>
                            <p className="responsive-p">
                                Polarity supports a whole host of keyboard shortcuts to make web browsing even more
                                efficient. View all shortcuts{' '}
                                <a href="http://polarity.x10.mx/info.html" target="_blank" rel="noopener noreferrer">
                                    here
                                </a>
                                .
                            </p>
                        </div>
                        <div className="col-lg-4 my-5">
                            <p className="h3">Mouse Gestures</p>
                            <p className="responsive-p">
                                Important browser functions can also be accessed by performing mouse commands by right
                                clicking and dragging a pattern. View all gestures{' '}
                                <a href="http://polarity.x10.mx/info.html" target="_blank" rel="noopener noreferrer">
                                    here
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
