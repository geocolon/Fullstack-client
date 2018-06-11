import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Nav from '../components/Nav';
import {createNotes} from '../actions/notes';




export class Dashboard extends React.Component {
    

    onSubmit(values) {
        // console.log('This is the values',values);
        // const {username, password, firstname, lastname} = values;
        // const user = {username, password, firstname, lastname};
        return this.props.dispatch(createNotes(values.imageurl, values.title));
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