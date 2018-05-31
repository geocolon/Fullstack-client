import { combineReducers } from 'redux';
import UsersReducer from './userReducer';
import { reducer as reduxFormReducer } from 'redux-form';


const rootReducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  users: UsersReducer
})

export default rootReducer;