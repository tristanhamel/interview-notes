import * as actions from '../constants/ActionTypes';

const initialState = [];

export const groups = (state = initialState, action) => {
  switch (action.type) {
    case actions.GROUPS_ADD:
      return [...state, action.payload];

    case actions.GROUPS_REMOVE:
      return state.filter(g => g.id !== action.payload);

    case actions.GROUPS_EDIT:
      return state.map(g => g.id === action.id ? action.payload : g);

    case actions.GROUPS_ADD_QUESTIONNAIRE: {
      const group = state.find(g => g.id === action.payload.groupId);

      return group ? state
        .map(g => g.id !== group.id ? g :
          Object.assign({}, g, {questionnairesIds: [...g.questionnairesIds, action.payload.questionnaireId]})
        ) :
        state;
    }

    case actions.GROUPS_REMOVE_QUESTIONNAIRE:
      return state
        .map(g => g.id !== action.payload.groupId ? g :
          Object.assign({}, g, {questionnairesIds: g.questionnairesIds.filter(id => id !== action.payload.questionnaireId)})
        );

    default:
      return state;
  }
};
