import * as actions from '../constants/ActionTypes';

export const initialState = {
  currentModal: null
};

export const ui = (state = initialState, {type, payload}) => {
  switch (type) {
    case actions.UI_SET_MODAL:
      return {...state, currentModal: payload};

    case actions.UI_RESET_MODAL:
      return {...state, currentModal: null};

    default:
      return state;
  }
};
