import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {createNotes} from '../actions/notes';
import Nav from '../components/Nav';

export class Dashboard extends React.Component {

    onSubmit(values) {
        console.log('This is the values',values);
        const {name,text} =values;
        // const {username, password, firstname, lastname} = values;
        // const user = {username, password, firstname, lastname};
        return this.props
            .dispatch(createNotes(note))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        return (
            <div className="dashboard">
                <Nav />
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>
                <div className="dashboard-protected-data">
                    Protected data: {this.props.protectedData}
                </div>

                <form
                    className="content-form"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    <label htmlFor="title">Title</label>
                    <Field component="input" type="text" name="title" />

                    <label htmlFor="imageurl">Image URL</label>
                    <Field
                        component="input"
                        type="text"
                        name="imageurl"
                    />
                    <button
                    type="submit"
                    >
                    Submit
                    </button>
                </form>    
            </div>
        );
    }
}


export default reduxForm({
    form: 'dashboard',
    onSubmitFail: (errors, dispatch) =>
    dispatch(focus('dashboard', Object.keys(errors)[0]))
})(Dashboard);