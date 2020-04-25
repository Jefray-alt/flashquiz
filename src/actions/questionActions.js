import {
  GET_CATEGORY,
  SET_LOADING,
  SET_QUESTIONS,
  SET_STARTING,
  SET_SCORE,
  CLEAR_STATE,
  CLEAR_STARTING,
} from '../actions/types';

export const getCategory = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('https://opentdb.com/api_category.php');
    const data = await res.json();
    dispatch({
      type: GET_CATEGORY,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setQuestions = (cat, diff, num) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(
      `https://opentdb.com/api.php?amount=${num}&category=${cat}&difficulty=${diff}`
    );
    const data = await res.json();
    dispatch({
      type: SET_QUESTIONS,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const setStarting = (num) => {
  return {
    type: SET_STARTING,
    payload: num,
  };
};

export const clearStarting = () => {
  return {
    type: CLEAR_STARTING,
  };
};

export const setFinalScore = (score) => {
  return {
    type: SET_SCORE,
    payload: score,
  };
};

export const clearState = () => {
  return {
    type: CLEAR_STATE,
  };
};
