import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SIGNUP_SUCCESS,
  TOTAL_SCORE_SUCCESS,
} from '../actions/action.type';
import { loadData, saveData } from '../hoc/localStorage';

const initialstate = {
  isAuth: false || loadData('isAuth'),
  token: '' || loadData('token'),
  role: '' || loadData('role'),
};

export const authReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case SIGNUP_SUCCESS: {
      alert(payload);
      //   console.log(payload);
      return {
        ...state,
      };
    }

    case LOGIN_SUCCESS: {
      //   console.log(payload);
      alert(payload.message);

      saveData('token', payload.token);
      saveData('isAuth', payload.isAuth);
      saveData('role', payload.role);
      return {
        ...state,
        isAuth: payload.isAuth,
        token: payload.token,
        role: payload.role,
      };
    }

    case LOGOUT_SUCCESS: {
      // console.log(type,payload)
      saveData('isAuth', false);
      saveData('token', '');
      saveData('role', '');
      return {
        ...state,
        isAuth: false,
        token: '',
        role: '',
      };
    }

    default:
      return state;
  }
};
