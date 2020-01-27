import React from 'react';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import './index.scss';

interface MainProps {}

export const Main: React.FC<MainProps> = props => {
    return (
        <div>
            <div
                className="jumbotron splash"
                css={{
                    alignItems: 'center',
                    display: 'flex',
                    overflow: 'hidden',
                }}
            >
                <div className="w-100">
                    <div className="display-4 text-left pb-5 ">A better browsing experience starts here.</div>
                    <div className="row mt-5">
                        <div className="col-lg-5 text-left">
                            <p className="lead">A feature packed, fast, secure, stable, and highly customizable web browser that offers the latest web standards.</p>
                            <br />
                            <p className="lead">Polarity enhances your privacy with adblocking and tracking protection built in. All these aspects of Polarity help deliver a unique browsing experience to help you enjoy the best of what the web has to offer.</p>
                        </div>
                        <div className="col-lg-7 splash__img">
                            {/* <img src="https://via.placeholder.com/1000x500" css={{
                                    maxWidth: '100%',
                                    height: 'auto'
                            }} /> */}
                            <picture css={{
                                zIndex: 1001
                            }}>
                                
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
        </div>
    );
};
