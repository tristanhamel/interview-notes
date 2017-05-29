import * as actions from '../constants/ActionTypes';
export function setSelectedGroup(id) {
    return dispatch => {
        dispatch({ type: actions.SELECTED_GROUP_SET, payload: id });
    };
}
export function resetSelectedGroup() {
    return dispatch => {
        dispatch({ type: actions.SELECTED_GROUP_RESET });
    };
}
