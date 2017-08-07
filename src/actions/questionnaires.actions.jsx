import * as actions from '../constants/ActionTypes';
import { batchActions } from 'redux-batched-actions';
import { makePOSTRequest } from './requests.actions';

export function addQuestionnaire(title, groupId) {
  //TODO: add support for optimistic update
  const newQuestionnaire = { title };

  return (dispatch, getState) => {
    groupId = groupId || getState().selectedGroup;

    return makePOSTRequest(endpoints.QUESTIONNAIRES)

    dispatch({type: actions.QUESTIONNAIRES_ADD, payload: newQuestionnaire});
    dispatch({type: actions.GROUPS_ADD_QUESTIONNAIRE, payload: {groupId, questionnaireId: newQuestionnaire.id}});
  };
}

export function deleteQuestionnaire(id, groupId) {
  return (dispatch, getState) => {
    const responses = getState().questionnaires
      .find(q => q.id === id)
      .responses;

    dispatch(batchActions([
      {type: actions.QUESTIONNAIRES_REMOVE, payload: id},
      {type: actions.RESPONSES_DELETE_MULTIPLE, payload: responses},
      {type: actions.GROUPS_REMOVE_QUESTIONNAIRE, payload: { groupId, questionnaireId: id}}
    ]));
  };
}

export function editQuestionnaire(props, questionnaireId) {
  props.last_modified = Date.now();

  return dispatch => {
    dispatch({type: actions.QUESTIONNAIRES_EDIT, payload: {props, questionnaireId}});
  };
}
