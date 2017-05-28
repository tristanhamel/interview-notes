import * as actions from '../constants/ActionTypes';

export function editedActions() {
  return {
    editDescription,
    editTitle
  };

  function editDescription(newDescription) {
    return dispatch => {
      dispatch({type: actions.EDITED_EDIT_DESCRIPTION, payload: newDescription});
    };
  }

  function editTitle(newTitle) {
    return dispatch => {
      dispatch({type: actions.EDITED_EDIT_TITLE, payload: newTitle});
    };
  }
}
