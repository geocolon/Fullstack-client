import { combineReducers } from 'redux';
import UserReducer from './userReducer';

const rootReducer = combineReducers({
  username: UserReducer
})

export default rootReducer;