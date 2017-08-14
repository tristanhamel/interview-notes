import { batchActions } from 'redux-batched-actions';
import * as actions from '../constants/ActionTypes';
import { endPoints } from '../constants/endPoints';
import { getUserGroups } from './groups.actions';
import { makeGETRequest, makePOSTRequest } from './requests.actions';

export function login(data) {
  return dispatch => {
    // save data in store
    dispatch({type: actions.USER_UPDATE, payload: {uid: data.uid, sid: data.sid}});

    // get full profile from db
    const url = `${endPoints.USER}/me`;
    return dispatch(makeGETRequest(url))
      .then(json =>  {
        dispatch({type: actions.USER_UPDATE, payload: json});
        // reset data
        dispatch(getUserGroups());
      });
  };
}

export function logout() {
  return (dispatch) => {
    // clear store
    dispatch(batchActions([
      {type: actions.GROUPS_RESET},
      {type: actions.QUESTIONS_RESET},
      {type: actions.QUESTIONNAIRES_RESET},
      {type: actions.RESPONSES_RESET},
      {type: actions.USER_RESET}
    ]));

    // delete session
    return dispatch(makePOSTRequest(`${endPoints.USER}/logout`));
  };
}