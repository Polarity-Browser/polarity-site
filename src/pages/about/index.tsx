import React from 'react';

interface AboutProps {

}

export const About: React.FC<AboutProps> = (props) => {
    
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
                    <div className="display-3 font-bold mt-5 text-white">Your privacy matters.</div>
                </div>
            </div>
        </div>
    )
}