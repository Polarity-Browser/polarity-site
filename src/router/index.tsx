  
import React from 'react';
import { Switch, Redirect, Route } from 'react-router';

import { Main } from '../pages/main';
import { Invalid } from '../pages/invalid';
import { About } from '../pages/about';
import { DefaultLayout } from '../layout';

interface RouterProps {

}

export const Router = (injectedProps: any) => {
    return (
        <Switch>
            <Redirect from='/' exact to='/main' />
            <Route path='/main' exact render={(props: any) => (
                <DefaultLayout>
                    <Main {...props}></Main>
                </DefaultLayout>
            )} />
            <Route component={Invalid} /> {/* This needs to be 404 component */}
        </Switch>
    );
}