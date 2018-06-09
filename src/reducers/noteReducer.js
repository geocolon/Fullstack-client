import { NOTE_REQUEST, NOTE_SUCCESS, NOTE_ERROR } from '../actions/notes';

const initialState = {
    notes: null,
    loading: false,
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === NOTE_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    } else if (action.type === NOTE_SUCCESS) {
        return Object.assign({}, state, {
            loading: true,
            notes: action.notes
        });
    } else if (action.type === NOTE_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            notes: action.error
        });
    }
    return state;
}