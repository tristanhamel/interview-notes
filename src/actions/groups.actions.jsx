import * as actions from '../constants/ActionTypes';

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
