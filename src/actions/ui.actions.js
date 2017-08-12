import * as actions from '../constants/ActionTypes';

export function setModal(modalId, modalData) {
  return dispatch => dispatch({type: actions.UI_SET_MODAL, payload: {modalId, modalData}});
}

export function resetModal() {
  return dispatch => dispatch({type: actions.UI_RESET_MODAL});
}

export function onRequest() {
  return dispatch => {
    dispatch({type: actions.UI_ON_REQUEST});
  };
}

export function onReceive() {
  return dispatch => {
    dispatch({type: actions.UI_ON_RECEIVE});
  };
}

export function onReceiveError(error) {
  return dispatch => {
    dispatch({type: actions.UI_ON_RECEIVE_ERROR, payload: error});
  };
}