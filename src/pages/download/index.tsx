import React from 'react';
import './index.scss';
import { Button } from 'react-bootstrap';

interface DownloadProps {}

export const Download: React.FC<DownloadProps> = props => {
    return (
        <div>
            <div
                className="cover"
                css={{
                    alignItems: 'center',
                    display: 'flex',
                    height: '100vh',
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
                    <div className="display-3 font-bold mt-5 text-white">Download.</div>
                </div>
            </div>
            <section className="section--padded">
                <div className="container">
                    <p className="h1">Polarity 10.0</p>
                    <hr />
                    <div className="row">
                        <div className="col-lg-6">
                            <p>
                                <b>Requirements</b>
                            </p>
                            <ul>
                                <li>Windows 7, 8, 8.1, or 10</li>
                                <li>.NET Framework 4.5.2 or higher</li>
                                <li>Visual C++ 2015</li>
                            </ul>
                            <p>
                                <b>Stats</b>
                            </p>
                            <ul>
                                <li>HTLM5 Test: 530/555</li>
                                <li>Acid 3 Test: 100/100</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 text-right">
                            <picture>
                                <img src="/images/polarity3.png" />
                            </picture>
                            <Button variant="info" className="px-3 py-3 mt-5">
                                Download
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section--padded">
                <div className="container">
                    <p className="h1">Polarity 9.3.9 - Unsupported as of 3/1/20</p>
                    <hr />
                    <div className="row">
                        <div className="col-lg-6">
                            <p>
                                <b>Requirements</b>
                            </p>
                            <ul>
                                <li>Windows 7, 8, 8.1, or 10</li>
                                <li>.NET Framework 4.5.2 or higher</li>
                                <li>Visual C++ 2015</li>
                            </ul>
                            <p>
                                <b>Stats</b>
                            </p>
                            <ul>
                                <li>HTLM5 Test: 513 nnnnnm /555</li>
                                <li>Acid 3 Test: 100/100</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 text-right">
                            <picture>
                                <img src="/images/polarity9.png" />
                            </picture>
                            <Button variant="info" className="px-3 py-3 mt-5">
                                Download
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section--padded">
                <div className="container">
                    <p className="h1">Polarity 8.4.4 - Unsupported as of 2/25/17</p>
                    <hr />
                    <div className="row">
                        <div className="col-lg-6">
                            <p>
                                <b>Requirements</b>
                            </p>
                            <ul>
                                <li>Windows Vista, 7, 8, 8.1, or 10</li>
                                <li>.NET Framework 4.5.2 or higher</li>
                                <li>Visual C++ 2015</li>
                            </ul>
                            <p>
                                <b>Stats</b>
                            </p>
                            <ul>
                                <li>HTLM5 Test: 512/555</li>
                                <li>Acid 3 Test: 100/100</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 text-right">
                            <picture>
                                <img src="/images/polarity8.png" />
                            </picture>
                            <Button variant="info" className="px-3 py-3 mt-5">
                                Download
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section--padded">
                <div className="container">
                    <p className="h1">Polarity 7.2.5 - Unsupported as of 2/15/16</p>
                    <hr />
                    <div className="row">
                        <div className="col-lg-6">
                            <p>
                                <b>Requirements</b>
                            </p>
                            <ul>
                                <li>Windows XP, Vista, 7, 8, 8.1, or 10</li>
                                <li>.NET Framework 4.0 or higher</li>
                                <li>Visual C++ 2010</li>
                            </ul>
                            <p>
                                <b>Stats</b>
                            </p>
                            <ul>
                                <li>HTLM5 Test: 407/555</li>
                                <li>Acid 3 Test: 100/100</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 text-right">
                            <picture>
                                <img src="/images/polarity7.png" />
                            </picture>
                            <Button variant="info" className="px-3 py-3 mt-5">
                                Download
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section--padded">
                <div className="container">
                    <p className="h1">Polarity 3.3.1 - Unsupported as of 3/4/14</p>
                    <hr />
                    <div className="row">
                        <div className="col-lg-6">
                            <p>
                                <b>Requirements</b>
                            </p>
                            <ul>
                                <li>Windows XP, Vista, 7, 8, 8.1, or 10</li>
                                <li>.NET Framework 2.0 or higher</li>
                            </ul>
                            <p>
                                <b>Stats</b>
                            </p>
                            <ul>
                                <li>HTLM5 Test: 173/555</li>
                                <li>Acid 3 Test: 99/100</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 text-right">
                            <picture>
                                <img src="/images/polarity3.jpg" />
                            </picture>
                            <Button variant="info" className="px-3 py-3 mt-5">
                                Download
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
