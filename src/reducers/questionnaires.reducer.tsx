import * as actions from '../constants/ActionTypes';
import { IQuestionnaire } from '../interfaces';

const initialState: Array<IQuestionnaire> = [];

export const questionnaires = (state: Array<IQuestionnaire> = initialState, action: {type: string, payload: any}): Array<IQuestionnaire> => {
  switch (action.type) {
    default:
      return state;
  }
};
