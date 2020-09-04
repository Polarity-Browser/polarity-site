import React from 'react';
import { Switch, Redirect, Route } from 'react-router';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Link } from 'react-router-dom';

interface InvalidProps {}

export const Invalid: React.FC<InvalidProps> = props => {
    return (
        <div>
            <img
                src="/images/splash.jpg"
                css={{
                    height: '100vh',
                    objectFit: 'cover',
                    position: 'absolute',
                    width: '100%',
                    zIndex: -1
                }}
            />
            <div className="w-100 container d-flex flex-column text-center align-items-center justify-content-center" css={{
                height: '100vh'
            }}>
                <h1 className="font-bold" css={{
                    fontSize: '12rem',
                    mixBlendMode: 'soft-light'
                }}>404</h1>
                <p className="h1" css={{
                    marginTop: '-3rem'
                }}>Looks like you hit the wrong turn. <Link to="/" css={{
                    color: '#3800ff'
                }}>Click to head home</Link>.</p>
            </div>
        </div>
    );
};
