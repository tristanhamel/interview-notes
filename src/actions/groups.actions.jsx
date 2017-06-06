import * as actions from '../constants/ActionTypes';
import { batchActions } from 'redux-batched-actions';

export function addGroup(newGroup) {
  return (dispatch, getState) => {
    // if the template was selected from an existing group
    let questions = [];
    if(newGroup.template.hasOwnProperty('groupId')) {
      questions = getState().groups
        .find(g => g.id === newGroup.template.groupId)
        .questionsIds
        .map(id => getState().questions.find(q => q.id === id))
        .map((q, i) =>  Object.assign({}, q, {id: `${Date.now()}${i}`, created_at: Date.now(), last_modified: Date.now()}));
    }

    const group = Object.assign({}, newGroup, {
      id: `${Date.now()}`,
      created_at: Date.now(),
      last_modified: Date.now(),
      questionsIds: questions.map(q => q.id),
      questionnairesIds: []
    });
    delete group.template;

    dispatch(batchActions([
      {type: actions.QUESTIONS_ADD_MULTIPLE, payload: questions},
      {type: actions.GROUPS_ADD, payload: group}
    ]));

    return new Promise((resolve) => {resolve(group);});
  };
}

export function editGroupProp(prop, groupId) {
  return (dispatch, getState) => {
    const group = Object.assign({}, getState().groups.find(g => g.id === groupId), prop);

    dispatch({type: actions.GROUPS_EDIT, payload: group});
  };
}

export function deleteGroup(groupId) {
  return (dispatch) => {
    dispatch({type: actions.GROUPS_REMOVE, payload: groupId});
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
