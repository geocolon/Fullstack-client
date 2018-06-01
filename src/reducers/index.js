import { combineReducers } from 'redux';
import UsersReducer from './userReducer';
import AuthReducer from './authReducer';
import { reducer as reduxFormReducer } from 'redux-form';


const rootReducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  users: UsersReducer,
  auth: AuthReducer
})

export default rootReducer;