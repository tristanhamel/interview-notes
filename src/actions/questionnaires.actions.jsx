import * as actions from '../constants/ActionTypes';
import { batchActions } from 'redux-batched-actions';

export function addQuestionnaire(title, groupId) {
  const newQuestionnaire = {
    title,
    id: Date.now(),
    created_at: Date.now(),
    las_modified: Date.now(),
    responses: []
  };

  return (dispatch, getState) => {
    groupId = groupId || getState().selectedGroup;

    dispatch({type: actions.QUESTIONNAIRES_ADD, payload: newQuestionnaire});
    dispatch({type: actions.GROUPS_ADD_QUESTIONNAIRE, payload: {groupId, questionnaireId: newQuestionnaire.id}});
  };
}

export function deleteQuestionnaire(id, groupId) {
  return (dispatch, getState) => {
    groupId = groupId || getState().selectedGroup;
    dispatch(batchActions([
      {type: actions.QUESTIONNAIRES_REMOVE, payload: id},
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

export function submitResponse(response, questionnaireId) {
  return (dispatch, getState) => {
    const questionnaire = getState().questionnaires.find(q => q.id === questionnaireId);
    if(!questionnaire) {
      return;
    }

    const responses = [...questionnaire.responses.filter(r => r.questionId !== response.questionId), response];

    dispatch({type: actions.QUESTIONNAIRES_EDIT, payload: {props:{responses, last_modified: Date.now()}, questionnaireId}});
  };
}
