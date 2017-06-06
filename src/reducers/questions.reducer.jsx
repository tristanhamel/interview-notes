import * as actions from '../constants/ActionTypes';

const initialState = [];

export const questions = (state = initialState, {type, payload}) => {
  switch (type) {
    case actions.QUESTIONS_ADD:
      return [...state, payload];

    case actions.QUESTIONS_ADD_MULTIPLE:
      return [...state, ...payload];

    case actions.QUESTIONS_EDIT:
      return state.map(q => q.id !== payload.id ? q : payload );

    case actions.QUESTIONS_DELETE:
      return state.filter(q => q.id !== payload);

    case actions.QUESTIONS_DELETE_MULTIPLE:
      return state.filter(q => payload.indexOf(q.id) === -1);

    default:
      return state;
  }
};
