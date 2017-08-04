import * as actions from '../constants/ActionTypes';

export const initialState = {
  uid: null
};

export const user = (state = initialState, {type, payload}) => {
  switch (type) {
    case actions.USER_UPDATE:
      return Object.assign({}, state, payload);

    case actions.USER_RESET:
      return {};

    default:
      return state;
  }
};
