import { combineReducers } from 'redux';
import NoteReducer from './noteReducer';
import AuthReducer from './authReducer';
import Protecteddata from './protected-data';
import { reducer as reduxFormReducer } from 'redux-form';


const rootReducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  user: NoteReducer,
  protected: Protecteddata,
  auth: AuthReducer
})

export default rootReducer;