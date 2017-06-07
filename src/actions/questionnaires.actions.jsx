import * as actions from '../constants/ActionTypes';
import { batchActions } from 'redux-batched-actions';

export function addQuestionnaire(title, groupId) {
  const newQuestionnaire = {
    title,
    id: `${Date.now()}`,
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
    const responsesIds = getState().questionnaires
      .find(q => q.id === id)
      .responsesIds;

    dispatch(batchActions([
      {type: actions.QUESTIONNAIRES_REMOVE, payload: id},
      {type: actions.RESPONSES_DELETE_MULTIPLE, payload: responsesIds},
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
