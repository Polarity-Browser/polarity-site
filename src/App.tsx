import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './router';
import logo from './logo.svg';
import './App.scss';

const App: React.FC = () => {
    return (
        <div className="App">
            <div className="App">
                <BrowserRouter>
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
