import { createSelector } from 'reselect';

const getGroups = (state) => state.groups;
const getQuestionnaires = (state) => state.questionnaires;
const getQuestions = (state) => state.questions;
const getSelectedGroup = (state) => state.selectedGroup;

export const groups = createSelector(
  [getGroups, getQuestionnaires, getQuestions],
  (g, questionnaires, questions) => {
    return g.map(group => Object.assign(
      {},
      group,
      {
        questionnaires: group.questionnairesIds.map(id => questionnaires.find(q => q.id === id)),
        questions: group.questionsIds.map(id => questions.find(q => q.id === id))
      }
    ));
  }
);

export const selectedGroup = createSelector(
  [groups, getSelectedGroup],
  (g, sg) => sg ? g.find(group => group.id === sg) : null
);
