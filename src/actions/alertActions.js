import { SET_ALERT, CLEAR_ALERT } from '../actions/types';

export const setAlert = (msg, type) => {
  return {
    type: SET_ALERT,
    payload: { msg, type },
  };
};

export const clearAlert = () => {
  return {
    type: CLEAR_ALERT,
  };
};
