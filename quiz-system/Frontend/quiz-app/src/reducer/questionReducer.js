import {
  ADDED_QUESTION_SUCCESS,
  GET_QUESTION_SUCCESS,
  SET_LOADING_STATE,
  TOTAL_SCORE_SUCCESS,
} from '../actions/action.type';

const initialstate = {
  msg: '',
  questions: [],
  level: 0,
  point: 0,
  loading:false
};

export const questionReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
   

    case ADDED_QUESTION_SUCCESS: {
      alert(payload);
      return {
        ...state,
        msg: payload,
      };
    }

    case GET_QUESTION_SUCCESS: {
      return {
        ...state,
        questions: payload.quest,
      };
    }

    // case TOTAL_SCORE_SUCCESS: {
    //   console.log(type, payload);
    //   return {
    //     ...state,
    //     level:payload.level,
    //     point:payload.point
    //   };
    // }

    case SET_LOADING_STATE :{
      return {
        ...state,
        loading:!state.loading
      }
    }
    default:
      return state;
  }
};
