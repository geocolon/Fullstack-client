import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {SubmissionError} from 'redux-form';


export const NOTE_REQUEST = 'NOTE_REQUEST';
export const noteRequest = () => ({
    type: NOTE_REQUEST
});

export const NOTE_SUCCESS = 'NOTE_SUCCESS';
export const noteSuccess = currentUser => ({
    type: NOTE_SUCCESS,
    currentUser
});

export const NOTE_ERROR = 'NOTE_ERROR';
export const noteError = error => ({
    type: NOTE_ERROR,
    error
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