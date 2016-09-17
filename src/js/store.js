import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import api from './reducers/api';

const reducer = combineReducers({
  api
});

export default compose(
  applyMiddleware(
    thunkMiddleware
  )
)(createStore)(reducer);
