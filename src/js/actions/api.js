export const REQUEST_RESPONSE = 'REQUEST_RESPONSE';
export const RECEIVE_RESPONSE = 'RECEIVE_RESPONSE';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';

export function requestResponse() {
  return {
    type: REQUEST_RESPONSE
  };
}

export function receiveResonse(body) {
  return {
    body,
    type: RECEIVE_RESPONSE
  };
}

export function receiveError(error) {
  return {
    error,
    type: RECEIVE_ERROR
  };
}

