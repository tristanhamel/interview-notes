import * as actions from '../constants/ActionTypes';
import { endPoints } from '../constants/endPoints';
import { getUserGroups } from './groups.actions';
import { makeGETRequest } from './requests';

export function login(data) {
  return dispatch => {
    // save data in store
    dispatch({type: actions.USER_UPDATE, payload: {uid: data.uid, sid: data.sid}});

    // get full profile from db
    const url = `${endPoints.USER}/me`;
    return makeGETRequest(url)
      .then(json =>  {
        dispatch({type: actions.USER_UPDATE, payload: json});
        // reset data
        dispatch(getUserGroups());
      });
  };
}
