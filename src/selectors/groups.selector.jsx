import { createSelector } from 'reselect';

const getGroups = (state) => state.groups;
const getQuestionnaires = (state) => state.questionnaires;
const getSelectedGroup = (state) => state.selectedGroup;

export const groups = createSelector(
  [getGroups, getQuestionnaires],
  (g, q) => {
    return g.map(group => Object.assign(
      {},
      group,
      {questionnaires: group.questionnairesIds.map(id => q.find(q => q.id === id))}
    ));
  }
);

export const selectedGroup = createSelector(
  [groups, getSelectedGroup],
  (g, sg) =>
    sg ? g.find(group => group.id === sg) : null
);
