  
import React from 'react';
import { Switch, Redirect, Route } from 'react-router';

import { Main } from '../pages/main';
import { Windows } from '../pages/windows';
import { Android } from '../pages/android';
import { Donate } from '../pages/donate';
import { Invalid } from '../pages/invalid';
import { About } from '../pages/about';
import { Privacy } from '../pages/privacy';
import { Download } from '../pages/download';
import { Contact } from '../pages/contact';
import { Press } from '../pages/press';
import { Store } from '../pages/store';

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
            <Route path='/windows' exact render={(props: any) => (
                <DefaultLayout>
                    <Windows {...props}></Windows>
                </DefaultLayout>
            )} />
            <Route path='/android' exact render={(props: any) => (
                <DefaultLayout>
                    <Android {...props}></Android>
                </DefaultLayout>
            )} />
            <Route path='/donate' exact render={(props: any) => (
                <DefaultLayout>
                    <Donate {...props}></Donate>
                </DefaultLayout>
            )} />
            <Route path='/about' exact render={(props: any) => (
                <DefaultLayout>
                    <About {...props}></About>
                </DefaultLayout>
            )} />
            <Route path='/privacy' exact render={(props: any) => (
                <DefaultLayout>
                    <Privacy {...props}></Privacy>
                </DefaultLayout>
            )} />
            <Route path='/download' exact render={(props: any) => (
                <DefaultLayout>
                    <Download {...props}></Download>
                </DefaultLayout>
            )} />
            <Route path='/contact' exact render={(props: any) => (
                <DefaultLayout>
                    <Contact {...props}></Contact>
                </DefaultLayout>
            )} />
            <Route path='/press' exact render={(props: any) => (
                <DefaultLayout>
                    <Press {...props}></Press>
                </DefaultLayout>
            )} />
            <Route path='/store' exact render={(props: any) => (
                <DefaultLayout>
                    <Store {...props}></Store>
                </DefaultLayout>
            )} />
            <Route component={Invalid} /> {/* This needs to be 404 component */}
        </Switch>
    );
}