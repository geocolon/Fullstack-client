import React from 'react';
import {Link} from 'react-router-dom';
import Logout from '../containers/Logout';
import './Nav.css';

export default function Nav() {
    return( 
        <div>
            <nav>
            <ul className="topnav">
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Logout /></li>
            </ul>
            </nav>
        </div>
    );
}