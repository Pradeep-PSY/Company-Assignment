import {
  ADDED_QUESTION_SUCCESS,
  GET_QUESTION_SUCCESS,
  TOTAL_SCORE_SUCCESS,
} from '../actions/action.type';

const initialstate = {
  msg: '',
  questions: [],
//   level: 0,
//   point: 0,
};

export const questionReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case TOTAL_SCORE_SUCCESS: {
        console.log(payload);
        return {
          ...state,
          
        };
      }

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

    
    default:
      return state;
  }
};
