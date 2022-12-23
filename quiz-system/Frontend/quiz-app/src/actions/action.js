import {
  ADDED_QUESTION_SUCCESS,
  GET_QUESTION_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SET_LOADING_STATE_PREV,
  SET_LOADING_STATE_NEXT,
  SIGNUP_SUCCESS,
  TOTAL_SCORE,
  TOTAL_SCORE_SUCCESS,
  GET_MAGIC_SUCCESS,
  GET_MAGIC_DATA_SUCCESS,
} from './action.type';
import axios from 'axios';
import { loadData } from '../hoc/localStorage';

export const signupApi = data => dispatch => {
  axios
    .post('https://quiz-system-mroc.onrender.com/user/register', data)
    .then(res => dispatch({ type: SIGNUP_SUCCESS, payload: res.data }))
    .catch(err => console.log(err));
};

export const loginApi = data => dispatch => {
  axios
    .post('https://quiz-system-mroc.onrender.com/user/login', data)
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
    .post('https://quiz-system-mroc.onrender.com/question/create', data)
    .then(res => dispatch({ type: ADDED_QUESTION_SUCCESS, payload: res.data }))
    .catch(err => console.log(err));
};

export const getquestionApi = data => dispatch => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${loadData(
    'token'
  )}`;
  axios
    .post('https://quiz-system-mroc.onrender.com/question/', data)
    .then(res => dispatch({ type: GET_QUESTION_SUCCESS, payload: res.data }))
    .catch(err => console.log(err));
};

// export const scoreTotal = da => dispatch => {
//   console.log(da);
//   dispatch({ type: TOTAL_SCORE_SUCCESS, paylaod: da });
// };



export const loadingStateprev = () => dispatch =>{
  dispatch({type:SET_LOADING_STATE_PREV})
}



export const loadingStatenext = () => dispatch =>{
  dispatch({type:SET_LOADING_STATE_NEXT})
}

export const getMagic = () => dispatch =>{
  axios.defaults.headers.common['Authorization'] = `Bearer ${loadData(
    'token'
  )}`;
  axios
  .post('https://quiz-system-mroc.onrender.com/magic/')
  .then(res => dispatch({ type: GET_MAGIC_SUCCESS, payload: res.data }))
  .catch(err => console.log(err));
}

export const getMagicdata = () =>dispatch => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${loadData(
    'token'
  )}`;
  axios
  .get('https://quiz-system-mroc.onrender.com/magic/question')
  .then(res => dispatch({ type: GET_MAGIC_DATA_SUCCESS, payload: res.data }))
  .catch(err => console.log(err));
}