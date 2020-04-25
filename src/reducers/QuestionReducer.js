import {
  SET_QUESTIONS,
  GET_CATEGORY,
  SET_LOADING,
  SET_STARTING,
  SET_SCORE,
  CLEAR_STATE,
  CLEAR_STARTING,
} from '../actions/types';

const initialState = {
  loading: false,
  categories: null,
  questions: null,
  error: null,
  isStarting: false,
  number: 0,
  finalScore: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    case SET_SCORE:
      return {
        ...state,
        finalScore: action.payload,
      };
    case SET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_STARTING:
      return {
        ...state,
        isStarting: true,
        number: action.payload,
      };
    case CLEAR_STARTING:
      return {
        ...state,
        isStarting: false,
      };
    case CLEAR_STATE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
