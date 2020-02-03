import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import './index.scss';

interface AndroidProps {}

export const Android: React.FC<AndroidProps> = props => {
    return (
        <div>
            <div
                className="cover"
                css={{
                    alignItems: 'center',
                    display: 'flex',
                    height: '100vh',
                }}
            >
                <div
                    className="w-100 text-center"
                    css={{
                        zIndex: 1100
                    }}
                >
                    <div className="display-3 font-bold mt-5 text-white">Coming soon.</div>
                </div>
            </div>
        </div>
    );
};
