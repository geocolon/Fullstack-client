import React from 'react';
import { connect } from 'react-redux';
import Nav from '../components/Nav';
import RegistrationForm from '../containers/Signup';
import {Link, Redirect} from 'react-router-dom';

export class RegistrationPage extends React.Component {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    render(){
        if (this.props.loggedIn) {
            return <Redirect to="/dashboard" />;
        }

        return (
            <div className="home">
                <Nav />
                <h2>Register for App</h2>
                <RegistrationForm />
                <Link to="/">Login</Link>
            </div>    
        );
    } 
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);