import * as actions from '../constants/ActionTypes';
import { endPoints } from '../constants/endPoints';

export function login(provider) {
  console.log(provider);

  const url = `${endPoints.AUTHENTICATE}/${provider}`;
  return fetch(url)
    .then(response =>
      console.log(response)
    );

  // return dispatch => {};
}