import React, { useEffect, useState } from 'react';
import './index.scss';

import ReactMarkdown from 'react-markdown';

interface PrivacyProps {}


export const Privacy: React.FC<PrivacyProps> = props => {
    const [markdown, setMarkdown] = useState('');
    fetch('/privacy.md').then(res => res.text()).then(text => {
        setMarkdown(text);
    });

    return (
        <div>
            <div
                className="cover"
                css={{
                    alignItems: 'center',
                    display: 'flex',
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
                    <div className="display-3 font-bold mt-5 text-white">Your privacy matters.</div>
                </div>
            </div>

            <section className="section--padded">
                <div className="container">
                    <ReactMarkdown source={markdown} />
                </div>
            </section>
        </div>
    );
};
