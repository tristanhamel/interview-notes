import * as actions from '../constants/ActionTypes';

export const initialState = {
  currentModal: null,
  isDataLoading: false,
  dataLoadingError: null
};

export const ui = (state = initialState, {type, payload}) => {
  switch (type) {
    case actions.UI_SET_MODAL:
      return {...state, currentModal: payload};

    case actions.UI_RESET_MODAL:
      return {...state, currentModal: null};

    case actions.UI_ON_RECEIVE:
      return {...state, isDataLoading: false};

    case actions.UI_ON_REQUEST:
      return {...state, isDataLoading: true, dataLoadingError: null};

    case actions.UI_ON_RECEIVE_ERROR:
      return {...state, isDataLoading: false, dataLoadingError: payload};

    default:
      return state;
  }
};
