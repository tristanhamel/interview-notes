import * as actions from '../constants/ActionTypes';
import { batchActions } from 'redux-batched-actions';
export function setSelectedGroup(id) {
  return dispatch => {
    dispatch({type: actions.SELECTED_GROUP_SET, payload: id});
  };
}

export function resetSelectedGroup() {
  return dispatch => {
    dispatch({type: actions.SELECTED_GROUP_RESET});
  };
}

export function editGroupProp(prop, groupId) {
  return (dispatch, getState) => {
    const group = Object.assign({}, getState().groups.find(g => g.id === groupId), prop);

    dispatch({type: actions.GROUPS_EDIT, payload: group});
  };
}

export function deleteGroup(groupId) {
  return (dispatch, getState) => {
    const batch = [
     {type: actions.GROUPS_REMOVE, payload: groupId}
    ];

    if(getState().selectedGroup === groupId) {
      batch.push({type: actions.SELECTED_GROUP_RESET});
    }

    dispatch(batchActions(batch));
  };
}

export function addQuestion(question, groupId) {
  question.id = Date.now();

  return (dispatch, getState) => {
    const questionnaireIds = getState().groups
      .find(g => g.id === groupId)
      .questionnairesIds;

    const response = {
      questionId: question.id,
      value: null
    };

    dispatch(batchActions([
      {type: actions.GROUPS_ADD_QUESTION, payload: {question, groupId}},
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
      {type: actions.GROUPS_DELETE_QUESTION, payload: {questionId, groupId}},
      {type: actions.QUESTIONNAIRES_DELETE_RESPONSE, payload: {questionnaireIds, questionId}}
    ]));
  };
}

export function editQuestion (question, groupId) {
  return (dispatch) => {
    dispatch({type: actions.GROUPS_EDIT_QUESTION, payload: {groupId, question}})
  };
}
