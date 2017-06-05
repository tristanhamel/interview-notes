import { createSelector } from 'reselect';

const getGroups = (state) => state.groups;
const getQuestionnaires = (state) => state.questionnaires;
const getQuestions = (state) => state.questions;
const getSelectedGroup = (state) => state.selectedGroup;

export const groups = createSelector(
  [getGroups, getQuestionnaires, getQuestions],
  (g, questionnaires, selectedQuestions) => {
    const questions = (group) => group.questionsIds
      .map(id => selectedQuestions.find(q => q.id === id))
      .reduce((categorized, q) => {
        categorized[q.category] = categorized.hasOwnProperty(q.category) ?
          [...categorized[q.category], q] :
          [q];

        return categorized;
      }, {});

    return g.map(group => Object.assign(
      {},
      group,
      {
        questionnaires: group.questionnairesIds.map(id => questionnaires.find(q => q.id === id)),
        questions: questions(group)
      }
    ));
  }
);

export const selectedGroup = createSelector(
  [groups, getSelectedGroup],
  (g, sg) => sg ? g.find(group => group.id === sg) : null
);
