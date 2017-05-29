import * as actions from '../constants/ActionTypes';
import { IQuestionnaire } from '../interfaces';

const initialState: Array<IQuestionnaire> = [
  { id: '1',
    title: 'company1'
  },
  {
    id: '2',
    title: 'company2'
  },
  {
    id: '3',
    title: 'company3'
  }
];

export const questionnaires = (state: Array<IQuestionnaire> = initialState, action: {type: string, payload: any}): Array<IQuestionnaire> => {
  switch (action.type) {
    default:
      return state;
  }
};
