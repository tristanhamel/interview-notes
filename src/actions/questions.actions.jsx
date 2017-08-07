import * as actions from '../constants/ActionTypes';
import { batchActions } from 'redux-batched-actions';

export function addQuestion(question, groupId) {
  question.id = `${Date.now()}`;

  return (dispatch, getState) => {
    dispatch(batchActions([
      {type: actions.QUESTIONS_ADD, payload: question},
      {type: actions.GROUPS_ADD_QUESTION, payload: {question: question.id, groupId}}
    ]));
  };
}

export function deleteQuestion (question, groupId) {
  return (dispatch, getState) => {
    const responses = getState().responses
      .filter(r => r.question === question);

    dispatch(batchActions([
      {type: actions.QUESTIONS_DELETE, payload: question},
      {type: actions.GROUPS_DELETE_QUESTION, payload: {question, groupId}},
      {type: actions.RESPONSES_DELETE_MULTIPLE, payload: responses}
    ]));
  };
}

export function editQuestion (question) {
  return (dispatch) => {
    dispatch({type: actions.QUESTIONS_EDIT, payload: question});
  };
}
