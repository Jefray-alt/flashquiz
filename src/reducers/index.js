import { combineReducers } from 'redux';
import QuestionReducer from './QuestionReducer';
import AlertReducer from './AlertReducer';

export default combineReducers({
  question: QuestionReducer,
  alert: AlertReducer,
});
