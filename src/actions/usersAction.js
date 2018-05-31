import { API_BASE_URL } from '../config';
export const type = {
    LOGIN_REQUEST : 'LOGIN_REQUEST',
    LOGIN_SUCCESS : 'LOGIN_SUCCESS',
    LOGIN_FAILURE : 'LOGIN_FAILURE',
    LOGOUT_REQUEST : 'LOGOUT_REQUEST',
    LOGOUT_SUCCESS : 'LOGOUT_SUCCESS',
    LOGOUT_FAILURE : 'LOGOUT_FAILURE'
}

export const UserActions = {

    setLoginRequest: (creds) => {
    return {
        type: type.LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        creds
    };
    },

    setLoginSuccess: (user) => {
    return {
        type: type.LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        id_token: user.id_token
    };
    },

    setLoginError: (loginError) => {
    return {
        type: type.LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        loginError
    };
    },

    requestLogin: (creds) => {
        return {
          type: type.LOGIN_REQUEST,
          isFetching: true,
          isAuthenticated: false,
          creds
        };
      },
      
    receiveLogin: (user) => {
        return {
          type: type.LOGIN_SUCCESS,
          isFetching: false,
          isAuthenticated: true,
          id_token: user.id_token
        };
      },
      
      loginError: (message) => {
        return {
          type: type.LOGIN_FAILURE,
          isFetching: false,
          isAuthenticated: false,
          message
        };
      }

}

export function loginUser(creds) {
    console.log(creds);
    let config = {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: creds.username,
            password: creds.password
        })
    }

    return dispatch => {
        // We dispatch requestLogin to kickoff the call to the API
        dispatch(UserActions.setLoginRequest(creds))
    
        return fetch(`${API_BASE_URL}/login`, config)
          .then(response =>
            response.json().then(user => ({ user, response }))
                ).then(({ user, response }) =>  {
            if (!response.ok) {
              // If there was a problem, we want to
              // dispatch the error condition
              dispatch(UserActions.setLoginError(user.message))
              return Promise.reject(user)
            } else {
              // If login was successful, set the token in local storage
              localStorage.setItem('id_token', user.id_token)
              localStorage.setItem('id_token', user.access_token)
              // Dispatch the success action
              dispatch(UserActions.setLoginSuccess(user))
            }
          }).catch(err => console.log("Error: ", err))
      }

    

    // return dispatch => {
    //     // We dispatch requestLogin to kickoff the call to the API
    //     dispatch(UserActions.setLoginRequest(creds))
    
    //     return fetch('http://localhost:3000/login', config)
    //       .then(response =>
    //         response.json().then(user => ({ user, response }))
    //             ).then(({ user, response }) =>  {
    //         if (!response.ok) {
    //           // If there was a problem, we want to
    //           // dispatch the error condition
    //           dispatch(UserActions.setLoginError(user.message))
    //           return Promise.reject(user)
    //         } else {
    //           // If login was successful, set the token in local storage
    //           localStorage.setItem('id_token', user.id_token)
    //           localStorage.setItem('id_token', user.access_token)
    //           // Dispatch the success action
    //           dispatch(UserActions.setLoginSuccess(user))
    //         }
    //       }).catch(err => console.log("Error: ", err))
    //   }
}

export default UserActions;

