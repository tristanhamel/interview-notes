import { batchActions } from 'redux-batched-actions';
import * as actions from '../constants/ActionTypes';
import { endPoints } from '../constants/endPoints';
import { makeGETRequest, makePUTRequest, makeDELETERequest, makePOSTRequest } from './requests.actions';

export function getUserGroups() {
  return (dispatch) => {
    // reset
    dispatch(batchActions([
      actions.GROUPS_RESET,
      actions.QUESTIONS_RESET,
      actions.QUESTIONNAIRES_RESET,
      actions.RESPONSES_RESET
    ]));
    const url = `${endPoints.GROUPS}`;
    return dispatch(makeGETRequest(url))
      .then(json => {
        console.log(json);
        return dispatch(batchActions([
          {type: actions.GROUPS_RECEIVED, payload: json.group},
          {type: actions.QUESTIONS_ADD_MULTIPLE, payload: json.question},
          {type: actions.QUESTIONNAIRES_ADD_MULTIPLE, payload: json.questionnaire},
          {type: actions.RESPONSES_ADD_MULTIPLE, payload: json.response},
        ]));
      });
  };
}

export function addGroup(newGroup) {
  //TODO: add support for optimistic update of local store
  return (dispatch, getState) => {
    // if the template was selected from an existing group
    let questions = [];
    if(newGroup.template.hasOwnProperty('groupId')) {
      questions = getState().groups
        .find(g => g.id === newGroup.template.groupId)
        .questionsIds
        .map(id => getState().questions.find(q => q.id === id))
        .forEach(q => delete q.id);
    }

    delete newGroup.template;

    return makePOSTRequest(endPoints.GROUPS, {...newGroup, questions})
      .then(json => {
        dispatch(batchActions([
          {type: actions.QUESTIONS_ADD_MULTIPLE, payload: json.questions},
          {type: actions.QUESTIONNAIRES_ADD_MULTIPLE, payload: json.questionnaires},
          {type: actions.GROUPS_ADD, payload: json.groups}
        ]));

        return json.groups[0];
      });
  };
}

export function editGroupProp(prop, groupId) {
  return (dispatch, getState) => {
    const group = Object.assign({}, getState().groups.find(g => g.id === groupId), prop);

    // db update in background
    const url = `${endPoints.GROUPS}/${groupId}`;
    makePUTRequest(url, group);

    // optimistic local update
    return dispatch({type: actions.GROUPS_EDIT, payload: group});

  };
}

export function deleteGroup(groupId) {
  return (dispatch) => {

    // db update in background
    const url = `${endPoints.GROUPS}/${groupId}`;
    makeDELETERequest(url);

    // optimistic local update
    return dispatch({type: actions.GROUPS_REMOVE, payload: groupId});
  };
}

export function addCategory(category, groupId) {
  return (dispatch, getState) => {
    const match = getState().find(g => g.id === groupId);
    if(!match) {
      return;
    }

    return editGroupProp({categories: [...match.categories, category]}, groupId);
  };
}

export function deleteCategory(category, groupId) {
  return (dispatch, getState) => {
    const match = getState().groups.find(g => g.id === groupId);
    if(!match) {
      return;
    }

    // filter questions of the deleted category
    const questions = getState().groups
      .filter(g => g.id === groupId)
      .map(id => getState().questions.find(q => q.id === id))
      .filter(q => q.category === category)
      .map(q => q.id);


    const batch = [editGroupProp({categories: match.categories.filter(c => c!== category)})];

    if(questions.length) {
      batch.push({type: actions.GROUPS_DELETE_QUESTIONS, payload: {questions, groupId}});
    }

    return dispatch(batchActions(batch));
  };
}
