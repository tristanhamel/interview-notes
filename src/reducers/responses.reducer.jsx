import * as actions from '../constants/ActionTypes';

export const initialState = [];

export const responses = (state = initialState, {type, payload}) => {
  switch (type) {
    case actions.RESPONSES_ADD:
      return [...state, payload];

    case actions.RESPONSES_ADD_MULTIPLE:
      return [...state, ...payload];

    case actions.RESPONSES_EDIT:
      return state.map(q => q.id !== payload.id ? q : payload );

    case actions.RESPONSES_DELETE:
      return state.filter(q => q.id !== payload);

    case actions.RESPONSES_DELETE_MULTIPLE:
      return state.filter(q => payload.indexOf(q.id) === -1);

    default:
      return state;
  }
};
