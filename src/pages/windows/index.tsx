import React from 'react';
import './index.scss';

interface WindowsProps {}

export const Windows: React.FC<WindowsProps> = props => {
    return (
        <>
            <div
                className="cover"
                css={{
                    alignItems: 'center',
                    display: 'flex',
                    overflow: 'hidden'
                }}
            >
                <div
                    className="w-100 text-center"
                    css={{
                        zIndex: 1100
                    }}
                >
                    <div className="display-3 font-bold">Unleash the web.</div> 
                </div>
            </div>
        </>
    );
};
