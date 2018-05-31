import {type} from '../actions/usersAction';

export default function reducer(state = {
  // isLoginSuccess: false,
  // isLoginPending: false,
  // loginError: null

  isFetching: false,
  isAuthenticated: localStorage.getItem('id_token') ? true : false
}, action) {
  switch (action.type) {
    case type.LOGIN_REQUEST:
      return Object.assign({}, state, {
        isLoginPending: action.isLoginPending
      });

    case type.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess
      });

    case type.LOGIN_FAILURE:
      return Object.assign({}, state, {
        loginError: action.loginError
      });
    
    case type.LOGOUT_SUCCESS:
    return Object.assign({}, state, {
      isFetching: true,
      isAuthenticated: false
    });


    default:
      return state;
  }
}

