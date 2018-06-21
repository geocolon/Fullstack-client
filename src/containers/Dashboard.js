import React from 'react';
import {Field, reduxForm, focus } from 'redux-form';
import ListDashboard from '../containers/ListDashboard';
import {createNotes, fetchNote } from '../actions/notes';

export class Dashboard extends React.Component {
    
    onSubmit(values) {
        
        const stepsOneTwo = () => {
            this.props.dispatch(createNotes(values.imageurl, values.title))
            .then(() => this.props.dispatch(fetchNote()) )
            // .then(() => this.props.reset() )

        }
        return stepsOneTwo()
    }
    
    render() {
        return (
            <div>
            <div className="container">
                
                <form
                    className="content-form"
                    onSubmit={
                        this.props.handleSubmit(values => {
                        this.onSubmit(values)
                        this.props.dispatch(fetchNote())
                    })}>
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