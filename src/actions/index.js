import API_BASE_URL from '../config';
import UserReducer from '../reducers/index';
import Axios from 'axios';

export const FETCH_POSTS = 'FETCH_POST';
const API_KEY = '?key=123_456_key';

export const fetchPost = () => dispatch => {
  fetch(`${API_BASE_URL}/api`).then(res => {
      if (!res.ok) {
          return Promise.reject(res.statusText);
      }
      return res.json();
  }).then(board => {
      dispatch(fetchBoardSuccess(users));
  });
};