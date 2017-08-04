import * as actions from '../constants/ActionTypes';

const initialState = [];

export const groups = (state = initialState, {type, payload}) => {
  switch (type) {
    case actions.GROUPS_ADD:
      return [...state, payload];

    case actions.GROUPS_REMOVE:
      return state.filter(g => g.id !== payload);

    case actions.GROUPS_RECEIVED:
      return payload;

    case actions.GROUPS_EDIT:
      return state.map(g => g.id === payload.id ? payload : g);

    case actions.GROUPS_ADD_QUESTIONNAIRE: {
      const group = state.find(g => g.id === payload.groupId);

      return group ? state
        .map(g => g.id !== group.id ? g :
          Object.assign({}, g, {questionnairesIds: [...g.questionnairesIds, payload.questionnaireId]})
        ) :
        state;
    }

    case actions.GROUPS_REMOVE_QUESTIONNAIRE:
      return state
        .map(g => g.id !== payload.groupId ? g :
          Object.assign({}, g, {questionnairesIds: g.questionnairesIds.filter(id => id !== payload.questionnaireId)})
        );

    case actions.GROUPS_ADD_QUESTION:{
      const updatedGroup = state.find(g => g.id === payload.groupId);
      if(!updatedGroup) {
        return state;
      }

      updatedGroup.questionsIds = [...updatedGroup.questionsIds, payload.questionId];

      return state
        .map(g => g.id !== payload.groupId ? g : updatedGroup);
    }

    case actions.GROUPS_DELETE_QUESTION: {
      const updatedGroup = state.find(g => g.id === payload.groupId);
      if(!updatedGroup) {
        return state;
      }

      updatedGroup.questionsIds = updatedGroup.questionsIds
        .filter(q => q !== payload.questionId);

      return state
        .map(g => g.id !== payload.groupId ? g : updatedGroup);
    }

    case actions.GROUPS_DELETE_QUESTIONS: {
      const updatedGroup = state.find(g => g.id === payload.groupId);
      if(!updatedGroup) {
        return state;
      }

      updatedGroup.questionsIds = updatedGroup.questionsIds
        .filter(q => payload.questionIds.indexOf(q) === -1);

      return state
        .map(g => g.id !== payload.groupId ? g : updatedGroup);
    }

    case actions.GROUPS_ADD_CATEGORY: {
      const updatedGroup = state.find(g => g.id === payload.groupId);
      if(!updatedGroup) {
        return state;
      }

      updatedGroup.categories = [...updatedGroup.categories, payload.category];

      return state
        .map(g => g.id !== payload.groupId ? g : updatedGroup);
    }

    case actions.GROUPS_DELETE_CATEGORY: {
      const updatedGroup = state.find(g => g.id === payload.groupId);
      if(!updatedGroup) {
        return state;
      }

      updatedGroup.categories = updatedGroup.categories
        .filter(q => q !== payload.category);

      return state
        .map(g => g.id !== payload.groupId ? g : updatedGroup);
    }

    default:
      return state;
  }
};
