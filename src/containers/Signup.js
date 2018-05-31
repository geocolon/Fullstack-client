import React, { Component } from 'react';

import Nav from '../components/Nav';
import {Link} from 'react-router-dom';
// import {required, nonEmpty} from '../vaildators'; // Async action

import '../App.css';
import './Login.css';

class Signup extends Component {
  onSubmit(values) {
    console.log(values);
    return this.props.dispatch(values.username, values.password)
  }


  render() {    

    return (
      <div className="container">
      <Nav />
        <form>
          <center><div>
            <label htmlFor="firstname"><strong>First Name</strong></label>
            <input type="text" placeholder="Enter First Name" name="firstname" required />


            <label htmlFor="lastname"><strong>Last name</strong></label>
            <input type="text" placeholder="Enter Username" name="lastname" required />

            <label htmlFor="username"><strong>Username</strong></label>
            <input type="text" placeholder="Enter Username" name="username" required />

            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" placeholder="Enter Password" name="password" required />
            <label htmlFor="re-password"><strong>Re-enter Password</strong></label>
            <input type="re-password" placeholder="Re-enter Password" name="re-password" required />
          </div>
          </center>
          <center><button id="create"><strong>Account Create</strong></button></center>

          <div className="container">
            <p className="form-ptag">Already have an account? <br /> <Link to="/login"><strong>Login here.</strong></Link></p>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
