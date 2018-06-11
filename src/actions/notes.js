import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {SubmissionError} from 'redux-form';


export const REQUEST_DATA = 'REQUEST_DATA';
export const requestNotes = () => ({
    type: REQUEST_DATA
});

export const RECIVEVE_DATA = 'RECIVEVE_DATA';
export const addNotes = notes => ({
    type: RECIVEVE_DATA,
    notes
});

export const createNotes = note => dispatch => {
return fetch(`${API_BASE_URL}/notes`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(note)
})
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(console.log('This is the actions api...'))
    .catch(err => {
        const {reason, message, location} = err;
        if (reason === 'ValidationError') {
            // Convert ValidationErrors into SubmissionErrors for Redux Form
            return Promise.reject(
                new SubmissionError({
                    [location]: message
                })
            );
        }
    });
};