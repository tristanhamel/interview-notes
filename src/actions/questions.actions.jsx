import * as actions from '../constants/ActionTypes';
import { batchActions } from 'redux-batched-actions';

export function addQuestion(question, groupId) {
  question.id = `${Date.now()}`;

  return (dispatch, getState) => {
    dispatch(batchActions([
      {type: actions.QUESTIONS_ADD, payload: question},
      {type: actions.GROUPS_ADD_QUESTION, payload: {questionId: question.id, groupId}}
    ]));
  };
}

export function deleteQuestion (questionId, groupId) {
  return (dispatch, getState) => {
    const responsesIds = getState().responses
      .filter(r => r.questionId === questionId);

    dispatch(batchActions([
      {type: actions.QUESTIONS_DELETE, payload: questionId},
      {type: actions.GROUPS_DELETE_QUESTION, payload: {questionId, groupId}},
      {type: actions.RESPONSES_DELETE_MULTIPLE, payload: responsesIds}
    ]));
  };
}

export function editQuestion (question) {
  return (dispatch) => {
    dispatch({type: actions.QUESTIONS_EDIT, payload: question});
  };
}
