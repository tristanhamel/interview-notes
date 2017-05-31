import * as actions from '../constants/ActionTypes';

const initialState = [];

export const questionnaires = (state = initialState, action) => {
  switch (action.type) {
    case actions.QUESTIONNAIRES_ADD:
      return [...state, action.payload];

    case actions.QUESTIONNAIRES_REMOVE:
      return state.filter(q => q.id !== action.payload);

    case actions.QUESTIONNAIRES_EDIT:
      return state.map(q => q.id === action.id ? action.payload : q);

    default:
      return state;
  }
};
