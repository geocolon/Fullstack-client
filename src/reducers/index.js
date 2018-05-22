import { combineReducers } from 'redux';
import UsersReducer from './userReducer';

const rootReducer = combineReducers({
  users: UsersReducer
})

export default rootReducer;