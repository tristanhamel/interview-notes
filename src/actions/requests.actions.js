import { onRequest, onReceive, onReceiveError } from './ui.actions';

function makeRequest(url, method, body) {
  return dispatch => {
    dispatch(onRequest());

    return fetch(url, {
      method,
      headers: new Headers,
      credentials: 'same-origin', // automatically add cookies
      mode: 'no-cors',
      body
    })
      .then(response => {
        dispatch(onReceive());
        return response.json();
      })
      .catch(error =>  {
        dispatch(onReceiveError(error));
        return Promise.reject(error);
      });
  };
}

export function makeGETRequest(url) {
  return makeRequest(url, 'GET');
}

export function makePOSTRequest(url, body) {
  return makeRequest(url, 'POST', body);
}

export function makePUTRequest(url, body) {
  return makeRequest(url, 'PUT', body);
}

export function makeDELETERequest(url) {
  return makeRequest(url, 'DELETE');
}

