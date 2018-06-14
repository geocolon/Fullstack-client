import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import ListDashboard from '../containers/ListDashboard';
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
            <div>
            <div className="container">
                
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
                    /> <br/>
                    <button
                    type="submit"
                    >
                    Submit
                    </button>
                </form>
                <ListDashboard /> 
                </div>
            </div>
        );
    }
}


export default reduxForm({
    form: 'dashboard',
    onSubmitFail: (errors, dispatch) =>
    dispatch(focus('dashboard', Object.keys(errors)[0]))
})(Dashboard);