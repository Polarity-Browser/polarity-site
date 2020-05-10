import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Button } from 'react-bootstrap';

interface ChangelogProps {}

export const Changelog: React.FC<ChangelogProps> = props => {
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
                    <div className="display-3 font-bold mt-5 text-white">Changelogs.</div>
                </div>
            </div>
            <section className="section--padded">
                <div className="container text-left">
                    <p className="responsive-lead">
                        View the changelog for different versions of Polarity.
                    </p>
                    <hr />
                    <a href="/files/changelog.txt">
                        <Button variant="info">
                            Windows
                        </Button>
                    </a>
                </div>
            </section>
        </div>
    );
};
