import React, { Component } from 'react';
import Nav from './Nav';
import {Link} from 'react-router-dom';

import '../App.css';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="container">
      <Nav />
        <form>
          <center><div>
            <label htmlFor="username"><strong>Username</strong></label>
            <input type="text" placeholder="Enter Username" name="username" required />
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" placeholder="Enter Password" name="password" required />
          </div>
          </center>
          <center><button id="login"><strong>Login</strong></button></center>

          <div className="container">
            <p className="form-ptag">Don’t have an account? <br /> <Link to="/signup"><strong>Create one here.</strong></Link></p>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
