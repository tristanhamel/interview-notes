import * as actions from '../constants/ActionTypes';
import { IGroup } from '../interfaces';

const initialState: Array<IGroup> = [
  {
    id: '1',
    title: 'Group1',
    description: 'in August',
    questionnaires: ['1', '2']
  },
  {
    id: '2',
    title: 'Group2',
    description: 'in September',
    questionnaires: ['3']
  }
];

export const groups = (state: Array<IGroup> = initialState, action: {type: string, payload: any}) => {
  switch (action.type) {
    default:
      return state;
  }
};
