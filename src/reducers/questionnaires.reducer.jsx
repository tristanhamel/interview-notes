import * as actions from '../constants/ActionTypes';

export const initialState = [];

export const questionnaires = (state = initialState, {type, payload}) => {
  switch (type) {
    case actions.QUESTIONNAIRES_ADD:
      return [...state, payload];

    case actions.QUESTIONNAIRES_ADD_MULTIPLE:
      return [...state, ...payload];

    case actions.QUESTIONNAIRES_REMOVE:
      return state.filter(q => q.id !== payload);

    case actions.QUESTIONNAIRES_EDIT: {
      const questionnaire = state.find(q => q.id === payload.questionnaireId);
      if(!questionnaire) {
        return state;
      }

      return state.map(q => q.id === payload.questionnaireId ? Object.assign({}, questionnaire, payload.props) : q);
    }

    case actions.QUESTIONNAIRES_ADD_RESPONSE: {
      const questionnaires = state.filter(q => q.id === payload.questionnaireId);
      if(!questionnaires.length) {
        return state;
      }

      return state
        .map(q => payload.questionnaireId !== q.id ? q :
          Object.assign({}, q, {responses: [...q.responses, payload.responseId]}));
    }

    case actions.QUESTIONNAIRES_DELETE_RESPONSE: {
      const questionnaires = state.filter(q => payload.questionnaireId !== q.id);
      if(!questionnaires.length) {
        return state;
      }

      return state
        .map(q => payload.questionnaireId !== q.id ? q :
          Object.assign({}, q, {responseIds: q.responseIds.filter(r => r !== payload.responseId)}));
    }

    default:
      return state;
  }
};
