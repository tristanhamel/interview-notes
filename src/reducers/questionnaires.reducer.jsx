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

    case actions.QUESTIONNAIRES_ADD_RESPONSE: {
      const questionnaires = state.filter(q => q.id === payload.questionnaireIds);
      if(!questionnaires.length) {
        return state;
      }

      return state
        .map(q => payload.questionnaireIds.indexOf(q.id) === -1 ? q :
          Object.assign({}, q, {responses: [...q.responses, payload.response]}));
    }

    case actions.QUESTIONNAIRES_DELETE_RESPONSE: {
      const questionnaires = state.filter(q => payload.questionnaireIds.indexOf(q.id) !== -1);
      if(!questionnaires.length) {
        return state;
      }

      return state
        .map(q => payload.questionnaireIds.indexOf(q.id) === -1 ? q :
          Object.assign({}, q, {responses: q.responses.filter(r => r.questionId !== payload.questionId)}));
    }

    default:
      return state;
  }
};
