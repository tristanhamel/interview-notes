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

export function addCategory(category, groupId) {
  return dispatch => {
    dispatch({type: actions.GROUPS_ADD_CATEGORY, payload: {category, groupId}});
  };
}

export function deleteCategory(category, groupId) {
  return (dispatch, getState) => {
    // filter questions of the deleted category
    const questionIds = getState().groups
      .filter(g => g.id === groupId)
      .map(id => getState().questions.find(q => q.id === id))
      .filter(q => q.category === category)
      .map(q => q.id);


    const batch = [{type: actions.GROUPS_DELETE_CATEGORY, payload: {category, groupId}}];

    if(questionIds.length) {
      batch.push({type: actions.GROUPS_DELETE_QUESTIONS, payload: {questionIds, groupId}});
    }

    dispatch(batchActions(batch));
  };
}
