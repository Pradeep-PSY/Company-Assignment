import {
  ADDED_QUESTION_SUCCESS,
  GET_QUESTION_SUCCESS,
  SET_LOADING_STATE_PREV,
  SET_LOADING_STATE_NEXT,
  TOTAL_SCORE_SUCCESS,
  GET_MAGIC_SUCCESS,
  GET_MAGIC_DATA_SUCCESS,
} from '../actions/action.type';

const initialstate = {
  msg: '',
  questions: [],
  level: 0,
  point: 0,
  loading:false,
  once:'',
  magic:[]
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

    case SET_LOADING_STATE_PREV :{
      return {
        ...state,
        loading:true
      }
    }

    case SET_LOADING_STATE_NEXT :{
      return {
        ...state,
        loading:false
      }
    }

    case GET_MAGIC_SUCCESS:{
      // console.log(payload)
      return {
        ...state,
        once:payload
      }
    }

    case GET_MAGIC_DATA_SUCCESS: {
      return {
        ...state,
        magic:payload
      }
    }
    default:
      return state;
  }
};
