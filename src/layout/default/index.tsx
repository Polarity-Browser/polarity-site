import React from 'react';
import { HeaderComponent, FooterComponent } from '../../global';

interface DefaultLayoutProps {
    children: any;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = props => {

    return (
        <>
            <HeaderComponent></HeaderComponent>
            { props.children }
            <FooterComponent></FooterComponent>
        </>
    )
}