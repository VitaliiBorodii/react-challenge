import fetch from 'isomorphic-fetch';
import { requestResponse, receiveError, receiveResonse } from '../actions/tubity';

export function getShortenUrl(url) {
  return (dispatch, getState) => {
    const state = getState();

    if (state.tubity.pending) {
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
          return response.text().then(err => dispatch(receiveError(err.toString())));
        }
        return response.json();
      })
      .then(response => dispatch(receiveResonse(response)))
      .catch(err => dispatch(receiveError(err.toString())));
  }
}