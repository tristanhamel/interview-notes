import * as actions from '../constants/ActionTypes';

export function setModal(modalId) {
  return dispatch => dispatch({type: actions.UI_SET_MODAL, payload: modalId});
}

export function resetModal() {
  return dispatch => dispatch({type: actions.UI_RESET_MODAL});
}