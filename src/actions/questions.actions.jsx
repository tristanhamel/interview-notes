import * as actions from '../constants/ActionTypes';
import { batchActions } from 'redux-batched-actions';

export function addQuestion(question, groupId) {
  question.id = `${Date.now()}`;

  return (dispatch, getState) => {
    const questionnaireIds = getState().groups
      .find(g => g.id === groupId)
      .questionnairesIds;

    const response = {
      questionId: question.id,
      value: undefined
    };

    dispatch(batchActions([
      {type: actions.QUESTIONS_ADD, payload: question},
      {type: actions.GROUPS_ADD_QUESTION, payload: {questionId: question.id, groupId}},
      {type: actions.QUESTIONNAIRES_ADD_RESPONSE, payload: {questionnaireIds, response}}
    ]));
  };
}

export function deleteQuestion (questionId, groupId) {
  return (dispatch, getState) => {
    const questionnaireIds = getState().groups
      .find(g => g.id === groupId)
      .questionnairesIds;

    dispatch(batchActions([
      {type: actions.QUESTIONS_DELETE, payload: questionId},
      {type: actions.GROUPS_DELETE_QUESTION, payload: {questionId, groupId}},
      {type: actions.QUESTIONNAIRES_DELETE_RESPONSE, payload: {questionnaireIds, questionId}}
    ]));
  };
}

export function editQuestion (question) {
  return (dispatch) => {
    dispatch({type: actions.QUESTIONS_EDIT, payload: question});
  };
}
