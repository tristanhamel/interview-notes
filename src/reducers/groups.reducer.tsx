import * as actions from '../constants/ActionTypes';
import { IGroup } from '../interfaces';

const initialState: Array<IGroup> = [];

export const groups = (state: Array<IGroup> = initialState, action: {type: string, payload: any}): Array<IGroup> => {
  switch (action.type) {
    default:
      return state;
  }
};
