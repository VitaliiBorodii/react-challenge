import { REQUEST_RESPONSE, RECEIVE_RESPONSE, RECEIVE_ERROR } from '../actions/api';

const initState = {
  pending: false,
  body: '',
  error: ''
};

function response(state = initState, action) {
  switch (action.type) {
    case REQUEST_RESPONSE:
      return {
        ...state,
        pending: true
      };
    case RECEIVE_RESPONSE:
      return {
        ...initState,
        body: action.body
      };
    case RECEIVE_ERROR:
      return {
        ...initState,
        error: action.error
      };
    default:
      return state;
  }
}

export default response;
