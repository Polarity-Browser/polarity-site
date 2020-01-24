  
import React from 'react';
import { Switch, Redirect, Route } from 'react-router';

import { Main } from '../pages/main';
import { About } from '../pages/about';

interface RouterProps {

}

export const Router = (injectedProps: any) => {
    return (
        <Switch>
            <Redirect from='/' exact to='/main' />
            <Route path='/main' exact render={(props: any) => (
                <Main {...props}></Main>
            )} />
            <Route component={Invalid} /> {/* This needs to be 404 component */}
        </Switch>
    );
}