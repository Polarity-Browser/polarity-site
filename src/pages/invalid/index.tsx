  
import React from 'react';
import { Switch, Redirect, Route } from 'react-router';

interface InvalidProps {

}

export const Invalid: React.FC<InvalidProps> = (props) => {
    return (
        <p>Invalid</p>
    );
}