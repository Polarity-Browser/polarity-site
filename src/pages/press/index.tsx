import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Button } from 'react-bootstrap';

interface PressProps {}

export const Press: React.FC<PressProps> = props => {
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
                    <div className="display-3 font-bold mt-5 text-white">Press.</div>
                </div>
            </div>
            <section className="section--padded">
                <div className="container">
                    <p className="h1">All the assets you need for promoting Polarity.</p>
                    <hr />
                    <p className="responsive-p">
                        You may download and modify resources for Polarity, but you must{' '}
                        <b>a direct link back to Polarity Browser's website</b>.
                    </p>

                    <a href="/files/Polarity Press Assets.zip">
                        <Button
                            variant="info"
                            size="lg"
                            className="btn-polarity mt-3"
                            css={{
                                borderRadius: '100px'
                            }}
                        >
                            Download Assets <i className="fas fa-chevron-down ml-2"></i>
                        </Button>
                    </a>

                    <div className="my-5">
                        <picture>
                            <img src="/images/promo/BrowserWithName-Dark.png" />
                        </picture>
                        <picture>
                            <img src="/images/promo/Polarity-logo-text-1408-1052-gray.png" />
                        </picture>
                        <picture>
                            <img src="/images/promo/Polarity-logo-text-1587-512-white.png" />
                        </picture>
                    </div>
                </div>
            </section>
        </div>
    );
};
