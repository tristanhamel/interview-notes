import * as actions from '../constants/ActionTypes';

const initialState = [];

export const questionnaires = (state = initialState, {type, payload}) => {
  switch (type) {
    case actions.QUESTIONNAIRES_ADD:
      return [...state, payload];

    case actions.QUESTIONNAIRES_REMOVE:
      return state.filter(q => q.id !== payload);

    case actions.QUESTIONNAIRES_EDIT: {
      const questionnaire = state.find(q => q.id === payload.questionnaireId);
      if(!questionnaire) {
        return state;
      }

      return state.map(q => q.id === payload.questionnaireId ? Object.assign({}, questionnaire, payload.props) : q);
    }

    default:
      return state;
  }
};
