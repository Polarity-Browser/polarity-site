import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

interface StoreProps {}

export const Store: React.FC<StoreProps> = props => {
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
                    <div className="display-3 font-bold mt-5 text-white">Store.</div>
                    <div className="h1 font-bold mt-5 text-white">One place to download all your apps and extensions. Coming soon.</div>
                </div>
            </div>
        </div>
    );
};
