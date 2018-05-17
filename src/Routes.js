import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Signup from './Signup'
import Login from './Login'
import About from './About'
import Landing from './Landing'

export default function Routes() {
    return (
        <Router>
            <div className="app">
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/about" component={About} />
                <Route exact path="/landing" component={Landing} />
            </div>
        </Router>    
    );
}