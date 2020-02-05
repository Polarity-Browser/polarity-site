import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Button } from 'react-bootstrap';

import './index.scss';

interface DonateProps {}

export const Donate: React.FC<DonateProps> = props => {
    return (
        <div>
            <div
                className="cover"
                css={{
                    alignItems: 'center',
                    display: 'flex'
                }}
            >
                <div
                    className="w-100 text-center"
                    css={{
                        zIndex: 1100
                    }}
                >
                    <div className="display-3 font-bold mt-5 text-white">Thank you.</div>
                </div>
            </div>
            <section className="section--padded">
                <div className="container text-center">
                    <p className="h1 mb-3">Polarity is a browser made for the people.</p>
                    <p className="responsive-lead">
                        Polarity prides itself in delivering the best browsing experience it can without having to
                        sacrifice speed, security, and privacy. As a result, we do not collect, sell, or distribute user
                        information <b>period</b>. However as Polarity expands, expenses will start to increase with the
                        cost of maintenance. The cost goes towards server uptime, domain hosting, and marketing.
                    </p>
                    <p className="responsive-lead">
                        Currently servers can overload easily with all the downloads and is in need of an upgrade. Any
                        amount of donations will be more than enough to keep this project running. I value user feedback
                        highly so do not hesitate to email me any suggestions or concerns you may have.
                    </p>
                    <p className="responsive-lead mb-5">
                        So please consider donating even a small amount to keep the project going. I would greatly
                        appreciate it.
                    </p>
                    <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=5JW89TNNHB4JL&currency_code=USD&source=url">
                        <Button className="btn-polarity" variant="info">
                            Donate
                        </Button>
                    </a>
                </div>
            </section>
            <section className="section--padded">
                <div className="container text-center">
                    <p className="h1 mb-3">How else can you help?</p>
                    <p className="responsive-lead">
                        Since 2016, Polarity partnered with{' '}
                        <a href="https://ecosia.org" target="_blank" rel="noopen noreferrer">
                            Ecosia
                        </a>{' '}
                        to help reforest badly damaged parts of the world. As you search on the Ecosia, you are helping
                        plant hundreds of trees along with raising money for Polarity's efforts. Ecosia is a search
                        engine that is eco-friendly and respects your privacy.
                    </p>

                    <picture>
                        <img src="/images/ecosia.png" />
                    </picture>
                </div>
            </section>
        </div>
    );
};
