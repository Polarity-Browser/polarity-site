import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './router';

import './styles/fonts.scss';
import './styles/theme.scss';
import './App.scss';
import { ScrollToTop } from './global';

const App: React.FC = () => {
    return (
        <div className="App">
            <div className="App">
                <BrowserRouter>
                <ScrollToTop />
                    <div className="layout d-flex">
                        <div className="w-100">
                            <Router />
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        </div>
    );
};

export default App;
