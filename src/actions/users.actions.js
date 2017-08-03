import * as actions from '../constants/ActionTypes';
import { endPoints } from '../constants/endPoints';

export function login(data) {
  return dispatch => {
    // save data in store
    // dispatch({actions: actions.USER_UPDATE, payload: {id: data.uid, sid: data.sid}});

    // get full profile from db
    const url = `${endPoints.USER}/me`;
    fetch(url, {
      method: 'GET',
      headers: new Headers,
      credentials: 'same-origin', // automatically add cookies
      mode: 'no-cors'
    })
      .then(response => {
        return response.json();
      })
      .then(json =>  {
        console.log(json);
      });
  };

  // const url = `${endPoints.GROUPS}`;
  // return fetch(url, {
  //   headers: new Headers,
  //   method: 'GET',
  //   mode: 'cors'
  // })
  //   .then(response => response.json())
  //   .then(json => console.log(json));

}
