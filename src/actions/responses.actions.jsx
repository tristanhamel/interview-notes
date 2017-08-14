import * as actions from '../constants/ActionTypes';
import { batchActions } from 'redux-batched-actions';
import { endPoints } from '../constants/endPoints';
import { makePOSTRequest, makeDELETERequest, makePUTRequest } from './requests.actions';

export function addResponse(response, questionnaireId) {
  response.score = null;
  //Todo: add support for optimistic update

  return dispatch => {
    return dispatch(makePOSTRequest(`${endPoints.RESPONSE}/${response.id}`, {...response, questionnaire: questionnaireId}))
      .then(r => {
        dispatch(batchActions([
          {type: actions.RESPONSES_ADD, payload: r},
          {type: actions.QUESTIONNAIRES_ADD_RESPONSE, payload: {responseId: r.id, questionnaireId}},
        ]));
      });
  };
}

export function submitResponse(response, questionnaireId) {
  return !response.id ? addResponse(response, questionnaireId) : editResponse(response);
}

export function editResponse(response) {
  return dispatch => {
    // update db in background
    dispatch(makePUTRequest(`${endPoints.RESPONSE}/${response.id}`, response));

    dispatch({type: actions.RESPONSES_EDIT, payload: response});
  };
}

export function deleteResponse(id) {
  return dispatch => {
    // update db in background
    dispatch(makeDELETERequest(`${endPoints.RESPONSE}/${id}`));

    return dispatch({type: actions.RESPONSES_DELETE, payload: id});
  };
}