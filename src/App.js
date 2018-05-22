import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Signup from './containers/Signup'
import Login from './containers/Login'
import About from './components/About'
import Landing from './components/Landing'

export default function Routes() {
    return (
        <Router>
            <div className="app">
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/about" component={About} />
                <Route exact path="/" component={Landing} />
            </div>
        </Router>    
    );
}