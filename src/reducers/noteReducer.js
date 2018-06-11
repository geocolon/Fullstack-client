import { REQUEST_DATA, RECIVEVE_DATA } from '../actions/notes';

const initialState = {
    notes: null,
    loading: false,
    error: null
};

export default function notes(state = initialState, action) {
    switch(action.type){
        case 'REQUEST_DATA':
            return {}
        case 'RECIVEVE_DATA':
            return {}
        default:
            return state
    }
}