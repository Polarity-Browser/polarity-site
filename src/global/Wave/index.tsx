import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Button } from 'react-bootstrap';

interface WaveProps {
    bottomColor: string;
    topColor: string;
}

export const Wave: React.FC<WaveProps> = props => {

    return (
        <div className="wave-container" css={{
            backgroundColor: props.topColor,
            marginBottom: '-1px'
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
                fill={props.bottomColor}
                fill-opacity="1"
                d="M0,128L40,117.3C80,107,160,85,240,106.7C320,128,400,192,480,202.7C560,213,640,171,720,160C800,149,880,171,960,165.3C1040,160,1120,128,1200,101.3C1280,75,1360,53,1400,42.7L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
        </svg>
    </div>
    )
}