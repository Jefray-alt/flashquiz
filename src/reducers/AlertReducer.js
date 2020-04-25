import { SET_ALERT, CLEAR_ALERT } from '../actions/types';

const initialState = {
  alertContent: null,
  isAlertSet: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        alertContent: action.payload,
        isAlertSet: true,
      };
    case CLEAR_ALERT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
