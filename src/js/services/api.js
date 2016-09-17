import fetch from 'isomorphic-fetch';
import { requestResponse, receiveError, receiveResonse } from '../actions/api';

const HOST = 'http://localhost:9990';

export function getShortenUrl(url) {
  return (dispatch, getState) => {
    const state = getState();
    if (state.api.pending) {
      return;
    }

    console.log({state: getState(), url});
    dispatch(requestResponse());
    fetch(HOST,{
      method: 'post',
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: `url=${url}`
    })
      .then(function(response) {
        if (response.status >= 400) {
          response.text().then(err => dispatch(receiveError(err)));
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(response => dispatch(receiveResonse(response)))
      .catch(err => dispatch(receiveError(err.toString())));
  }
}