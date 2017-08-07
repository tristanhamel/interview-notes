import { createSelector } from 'reselect';
import { scoring } from './scoring';

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
        {responses: q.responses
          .map(id => responses
            .find(r => r.id === id)
          )
        }
      ));
  }
);

export const populatedGroups = createSelector(
  [getGroups, populatedQuestionnaires, getQuestions],
  (g, selectedQuestionnaires, selectedQuestions) => {
    const questions = (group) => group.questions
      .map(id => selectedQuestions.find(q => q.id === id))
      .reduce((categorized, q) => {
        categorized[q.category] = categorized.hasOwnProperty(q.category) ?
          [...categorized[q.category], q] :
          [q];

        return categorized;
      }, {});

    const questionnaires = (group) => group.questionnaires
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

export const groupsWithScores = createSelector(
  [populatedGroups, getResponses],
  (groups, responses) => {
    const res = groups.map(group => {
      const questions = Object.keys(group.questions).reduce((ar, prop ) => [...ar, ...group.questions[prop]], []);
      const questionnaires = scoring(group.questionnaires, questions, responses);
      return Object.assign({}, group, { questionnaires });
    });
    return res;
  }
);
