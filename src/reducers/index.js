import { combineReducers } from 'redux';
import user from './userReducer';

const rootReducer = combineReducers({
  user,
  expenseReducer,
  alertReducer
})

export default rootReducer;