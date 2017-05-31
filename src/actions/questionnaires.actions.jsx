import * as actions from '../constants/ActionTypes';

export function addQuestionnaire(title, groupId) {
  const newQuestionnaire = {
    title,
    id: Date.now(),
    created_at: Date.now(),
    las_modified: Date.now(),
    responses: []
  };

  return (dispatch, getState) => {
    if(!groupId) {
      groupId = getState().selectedGroup;
    }

    dispatch({type: actions.QUESTIONNAIRES_ADD, payload: newQuestionnaire});
    dispatch({type: actions.GROUPS_ADD_QUESTIONNAIRE, payload: {groupId, questionnaireId: newQuestionnaire.id}});
  };
}

export function removeQuestionnaire(id, groupId) {
  return dispatch => {
    dispatch({type: actions.QUESTIONNAIRES_REMOVE, payload: id});
    dispatch({type: actions.GROUPS_REMOVE_QUESTIONNAIRE, payload: { groupId, questionnaireId: id}});
  };
}

export function editQuestionnaire(questionnaire) {
  questionnaire.last_modified = Date.now();

  return dispatch => {
    dispatch({type: actions.QUESTIONNAIRES_EDIT, payload: questionnaire});
  };
}
