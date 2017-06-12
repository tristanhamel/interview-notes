import * as actions from '../constants/ActionTypes';
import { endPoints } from '../constants/endPoints';

export function login(provider) {
  console.log(provider);

  const url = `${endPoints.AUTHENTICATE}/${provider}`;
  return fetch(url, {
    method: 'GET',
    headers: new Headers,
    mode: 'cors'
  })
    .then(response =>
      console.log(response)
    );

  // const url = `${endPoints.GROUPS}`;
  // return fetch(url, {
  //   headers: new Headers,
  //   method: 'GET',
  //   mode: 'cors'
  // })
  //   .then(response => response.json())
  //   .then(json => console.log(json));


  // return dispatch => {};
}