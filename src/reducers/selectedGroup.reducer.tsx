import * as actions from '../constants/ActionTypes';

const initialState:string | null = null;

export const selectedGroup = (state = initialState, {type, payload}):string | null => {
  switch (type) {
    case actions.SELECTED_GROUP_SET:
      return payload;

    case actions.SELECTED_GROUP_RESET:
      return null;

    default:
      return state;
  }
};
