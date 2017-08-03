import * as actions from '../constants/ActionTypes';
import { endPoints } from '../constants/endPoints';

export function login(data) {
  return dispatch => {
    // save data in store
    dispatch({type: actions.USER_UPDATE, payload: {uid: data.uid, sid: data.sid}});

    // get full profile from db
    const url = `${endPoints.USER}/me`;
    return fetch(url, {
      method: 'GET',
      headers: new Headers,
      credentials: 'same-origin', // automatically add cookies
      mode: 'no-cors'
    })
      .then(response => {
        return response.json();
      })
      .then(json =>  {
        dispatch({type: actions.USER_UPDATE, payload: json});
      });
  };
}
