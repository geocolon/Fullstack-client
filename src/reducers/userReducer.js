import { userAdd, userLogin } from '../actions';

const initialState = {
  userAdd,
  userLogin
};

const UserReducer = (state = initialState, action) => {
    switch(action.type) {
    case 'USER_ADD':
      return Object.assign({}, state, {
        userAdd: action.userAdd
      })
    case 'USER_LOGIN':
      return {}

    default:
      return state
    }
    
  
export default UserReducer;
