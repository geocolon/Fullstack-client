import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './containers/Login'
import About from './components/About'
import Landing from './components/Landing'
import { RegistrationPage } from './components/registration-page';

export default function Routes() {
    return (
        <Router>
            <div className="app">
                <Route exact path="/signup" component={RegistrationPage} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/about" component={About} />
                <Route exact path="/" component={Landing} />
            </div>
        </Router>    
    );
}