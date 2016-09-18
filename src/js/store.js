import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import tubity from './reducers/tubity';

const reducer = combineReducers({
  tubity
});

export default compose(
  applyMiddleware(
    thunkMiddleware
  )
)(createStore)(reducer);
