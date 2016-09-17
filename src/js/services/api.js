import fetch from 'isomorphic-fetch';
import { requestResponse, receiveError, receiveResonse } from '../actions/api';

export function getShortenUrl(url) {
  return (dispatch, getState) => {
    const state = getState();

    if (state.api.pending) {
      return;
    }

    const data = new FormData();
    data.append( "url", url);

    dispatch(requestResponse());

    fetch(`${HOST}/s`,{
      method: 'post',
      body: data
    })
      .then(function(response) {
        if (response.status >= 400) {
          response.text().then(err => dispatch(receiveError(err)));
        }
        return response.json();
      })
      .then(response => dispatch(receiveResonse(response)))
      .catch(err => dispatch(receiveError(err.toString())));
  }
}