import { createSelector } from 'reselect';

const getGroups = (state) => state.groups;
const getQuestionnaires = (state) => state.questionnaires;
const getQuestions = (state) => state.questions;
const getResponses = state => state.responses;

export const populatedQuestionnaires = createSelector(
  [getQuestionnaires, getResponses],
  (selectedQuestionnaires, responses) => {
    return selectedQuestionnaires
      .map(q => Object.assign(
        {},
        q,
        {responses: q.responsesIds
          .map(id => responses
            .find(r => r.id === id)
          )
        }
      ));
  }
);

export const groups = createSelector(
  [getGroups, populatedQuestionnaires, getQuestions],
  (g, selectedQuestionnaires, selectedQuestions) => {
    const questions = (group) => group.questionsIds
      .map(id => selectedQuestions.find(q => q.id === id))
      .reduce((categorized, q) => {
        categorized[q.category] = categorized.hasOwnProperty(q.category) ?
          [...categorized[q.category], q] :
          [q];

        return categorized;
      }, {});

    const questionnaires = (group) => group.questionnairesIds
      .map(id => selectedQuestionnaires.find(q => q.id === id));

    return g.map(group => Object.assign(
      {},
      group,
      {
        questionnaires: questionnaires(group),
        questions: questions(group),
        categories: Object.keys(questions(group)),
      }
    ));
  }
);
