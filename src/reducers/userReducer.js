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
    
      //   case 'LOGIN_USER_SUCCESS':
    //     return {
    //       ...state,
    //       isLoggedIn: true,
    //       userId: action.userId,
    //       authToken: action.token
    //     }
  
    //   default:
    //     return state
    // }
}
  
export default UserReducer;

// const users = (state = [], action) => {
//   switch(action.type) {
//   case 'REQUEST_DATA':
//     return {}

//   case 'RECIEVE_DATA':
//     return {}

//   default:
//     return state
//   }
// }

// export default users;