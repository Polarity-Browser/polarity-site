import React from 'react';

interface AboutProps {}

export const About: React.FC<AboutProps> = props => {
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
                    <div className="display-3 font-bold mt-5 text-white">About.</div>
                </div>
            </div>
            <section className="section--padded">
                <div className="container">
                    <p className="responsive-lead">
                        This project was originally started back in December of 2011 and it has quickly evolved into a
                        large project that it is today. As of 2017, it had already received over{' '}
                        <b>1 million downloads</b> in over <b>165 countries</b>.
                    </p>
                    <p className="responsive-lead">
                        I really hope to continue updating this project well into the future. Any feedback is welcome.
                    </p>
                    <picture>
                        <img src="/images/5years_orig.png" />
                    </picture>
                </div>
            </section>
        </div>
    );
};
