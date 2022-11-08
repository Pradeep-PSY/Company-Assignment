import {
  ADDED_QUESTION_SUCCESS,
  GET_QUESTION_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SET_LOADING_STATE,
  SIGNUP_SUCCESS,
  TOTAL_SCORE,
  TOTAL_SCORE_SUCCESS,
} from './action.type';
import axios from 'axios';
import { loadData } from '../hoc/localStorage';

export const signupApi = data => dispatch => {
  axios
    .post('https://frozen-temple-35144.herokuapp.com/user/register', data)
    .then(res => dispatch({ type: SIGNUP_SUCCESS, payload: res.data }))
    .catch(err => console.log(err));
};

export const loginApi = data => dispatch => {
  axios
    .post('https://frozen-temple-35144.herokuapp.com/user/login', data)
    .then(res => dispatch({ type: LOGIN_SUCCESS, payload: res.data }))
    .catch(err => console.log(err));
};

export const logoutApi = () => dispatch => {
  dispatch({ type: LOGOUT_SUCCESS });
};

export const questionApi = data => dispatch => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${loadData(
    'token'
  )}`;
  axios
    .post('https://frozen-temple-35144.herokuapp.com/question/create', data)
    .then(res => dispatch({ type: ADDED_QUESTION_SUCCESS, payload: res.data }))
    .catch(err => console.log(err));
};

export const getquestionApi = data => dispatch => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${loadData(
    'token'
  )}`;
  axios
    .post('https://frozen-temple-35144.herokuapp.com/question/', data)
    .then(res => dispatch({ type: GET_QUESTION_SUCCESS, payload: res.data }))
    .catch(err => console.log(err));
};

// export const scoreTotal = da => dispatch => {
//   console.log(da);
//   dispatch({ type: TOTAL_SCORE_SUCCESS, paylaod: da });
// };



export const loadingState = () => dispatch =>{
  dispatch({type:SET_LOADING_STATE})
}