import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Logout from '../containers/Logout';
import hammenu from '../resource/black-ham-icon.png';
import './Nav.css';

class Nav extends React.Component {
    render(){
        if (this.props.loggedIn) {
            // document.getElementsByClassName("login-status").style.display="none";
        }
        return( 
            <div>
                <nav>
                <div className="hamburger">
                    <img src={hammenu} alt="menu" />
                </div>
                <ul className="topnav">
                    <li><Logout /></li>
                    <li className="login-status"><Link to="/signup">Sign Up</Link></li>
                    <li className="login-status"><Link to="/login">Login</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/">Home</Link></li>
                </ul>
                
                </nav>
            </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log('This is the state on Reg page',state)
    return {
   loggedIn: state.auth.currentUser !== null
    }
};

export default connect(mapStateToProps)(Nav)