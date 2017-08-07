import { onRequest, onReceive, onReceiveError } from './ui.actions';

function makeRequest(url, method, body) {
  return dispatch => {
    dispatch(onRequest());

    return fetch(url, {
      method,
      headers: new Headers({'Content-Type': 'application/json'}),
      credentials: 'same-origin', // automatically add cookies
      body: JSON.stringify(body)
    })
    .then(response => {
      dispatch(onReceive());
      return response.json();
    })
    .then(json => Array.isArray(json) ? serializer(json) : json)
    .catch(error =>  {
      dispatch(onReceiveError(error));
      return Promise.reject(error);
    });
  };
}

// sort resources by type and generate arrays of ids
function serializer(resource) {
  const resourceTypes = ['questions', 'questionnaires', 'responses'];

  function collectEntities(collection) {
    const output = collection
      .reduce((result, item) => {
        Object.keys(item)
          .forEach(k => {
            if(resourceTypes.includes(k) && item[k] && item[k].length && typeof item[k][0] !== 'string') {
              result= [...result, ...item[k]];
              item[k] = item[k]
                .map(i => i.id);
            }
          });
        return result;
      }, [...collection]);
    return output.length === collection.length ? output : collectEntities(output);
  }

  // collect entities
  return collectEntities(resource)
  // group entities
    .reduce((grouped, item) => {
      if (grouped.hasOwnProperty(item.type)) {
        grouped[item.type].push(item);
      } else {
        grouped[item.type] = [item];
      }
      return grouped;
    }, {});
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

