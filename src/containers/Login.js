import React, { Component } from 'react';
import Nav from '../components/Nav';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import '../App.css';
import './Login.css';

class Login extends Component {
  
  

  render() {
    return (
      <div className="container">
      <Nav />
        <form onSubmit={ event => {
          event.preventDefault()

          const username = event.target.username.value
          const password = event.target.password.value

        }}>
        
          <center><div>
            <label htmlFor="username"><strong>Username</strong></label>
            <input type="text" placeholder="Enter Username" name="username" required />
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" placeholder="Enter Password" name="password" required />
          </div>
          </center>
          <center><button id="login"><strong>Login</strong></button></center>
          {this.props.loading ? 
          <p>Loading...</p>
          :
          console.log(this.props.users)
          }
          {this.props.children}
          <div className="container">
            <p className="form-ptag">Don’t have an account? <br /> <Link to="/signup"><strong>Create one here.</strong></Link></p>
          </div>
        </form>
      </div>
    );
  }
}

// const actionCreators = {
//   fetchData
// }

// const mapStateToProps = (state) => ({
//   users: state.users.data,
//   loading: state.users.loading
// })

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators( actionCreators, dispatch);
//  };
// connect(mapStateToProps, mapDispatchToProps)
 export default Login;