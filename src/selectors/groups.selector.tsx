import { Selector, createSelector } from 'Reselect';

// wrong defs picked by ts.
// import { IGroup, IQuestionnaire, IGroupReselect, IState } from '../interfaces';
//
// const getGroups:Selector<IState, IGroup[]> = (state):IGroup[] => state.groups;
// const getQuestionnaires:Selector<IState, IQuestionnaire[]> = (state) => state.questionnaires;
// const getSelectedGroup:Selector<IState, string> = (state:IState) => state.selectedGroup;
//
// export const groups = createSelector<IState, IGroup[], IQuestionnaire[], IGroupReselect>(
//   [getGroups, getQuestionnaires],
//   (g, q) => {
//
//     return g.map(group => Object.assign(
//       {},
//       group,
//       {questionnaires: group.questionnairesIds.map(id => q.find(q => q.id === id))}
//     ));
//   }
// );
//
// export const selectedGroup = createSelector<IState, IGroupReselect[], string, IGroupReselect>(
//   [groups, getSelectedGroup],
//   (g, selectedGroup) =>
//     selectedGroup ? g.find(group => group.id === selectedGroup) : null
// );

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
  (g, selectedGroup) =>
    selectedGroup ? g.find(group => group.id === selectedGroup) : null
);
