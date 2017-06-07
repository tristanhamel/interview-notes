import * as actions from '../constants/ActionTypes';
import { batchActions } from 'redux-batched-actions';

export function addResponse(response, questionnaireId) {
  response.id = `${Date.now()}`;
  response.score = null;

  return dispatch => {
    dispatch(batchActions([
      {type: actions.RESPONSES_ADD, payload: response},
      {type: actions.QUESTIONNAIRES_ADD_RESPONSE, payload: {responseId: response.id, questionnaireId}},
    ]));
  };
}

export function submitResponse(response, questionnaireId) {
  return !response.id ? addResponse(response, questionnaireId) : editResponse(response);
}

export function editResponse(response) {
  return dispatch => {
    dispatch({type: actions.RESPONSES_EDIT, payload: response});
  };
}

export function deleteResponse(id) {
  return dispatch => {
    dispatch({type: actions.RESPONSES_DELETE, payload: id});
  };
}