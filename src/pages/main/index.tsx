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
                    display: 'flex',
                    minHeight: '100vh',
                    alignItems: 'center'
                }}
            >
                <div className="container">...</div>
                <div className="polygons">
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
