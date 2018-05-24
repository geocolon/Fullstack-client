export const type = {
    SET_LOGIN_PENDING: 'SET_LOGIN_PENDING',
    SET_LOGIN_SUCCESS: 'SET_LOGIN_SUCCESS',
    SET_LOGIN_ERROR: 'SET_LOGIN_ERROR',
    SET_LOGIN_NEW: 'SET_LOGIN_NEW',
}

const UserAction = {

    setLoginPending: (isLoginPending) => {
    return {
        type: type.SET_LOGIN_PENDING,
        isLoginPending
    };
    },

    setLoginSuccess: (isLoginSuccess) => {
    return {
        type: type.SET_LOGIN_SUCCESS,
        isLoginSuccess
    };
    },

    setLoginError: (loginError) => {
    return {
        type: type.SET_LOGIN_ERROR,
        loginError
    };
    },

    setLoginNew: ( username, password ) => {
    return {
        type: type.SET_LOGIN_NEW,
        username,
        password
    };
    },
}
export default UserAction;