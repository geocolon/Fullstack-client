import { combineReducers } from 'redux';
// import UsersReducer from './userReducer';
import AuthReducer from './authReducer';
import Protecteddata from './protected-data';
import { reducer as reduxFormReducer } from 'redux-form';


const rootReducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  // users: UsersReducer,
  protected: Protecteddata,
  auth: AuthReducer
})

export default rootReducer;