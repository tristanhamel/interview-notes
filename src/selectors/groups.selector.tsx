import { createSelector } from 'reselect';

const getGroups = state => state.groups;
const getQuestionnaires = state => state.questionnaires;

export const groups = createSelector(
  [getGroups, getQuestionnaires],
  (groups, questionnaires) => {

    return groups.map(group => Object.assign(
      {},
      group,
      {questionnaires: group.questionnaires.map(id => questionnaires.find(q => q.id === id))}
    ));
  }
);
