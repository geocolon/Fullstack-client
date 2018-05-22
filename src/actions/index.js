/*
 * action types
 */

export const USER_ADD = 'USER_ADD';
export const USER_LOGIN = 'USER_LOGIN';

export function userAdd(username, password) {
  return { "type": "USER_ADD", "payload": "text" }
}

export function userLogin(username, password) {
  return {type: USER_LOGIN, username, password}
}




// const requestData = () => ({
//   type: 'REQUEST_DATA'
// });

// const recieveData = (data) => ({
//   type: 'RECIEVE_DATA',
//   data
// });

// export const fetchData = () => {
//     return (dispatch) => {
//         dispatch(requestData)
//         fetch('/users.json')
//         .then(response => response.json())
//         .then(json => console.log(json))
//         .catch(ex => console.log('parsing Failed', ex))
//     }
// }        