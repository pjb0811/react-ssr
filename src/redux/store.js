import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

const customizedPromiseMiddleware = promiseMiddleware({
  promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'FAILURE'],
});

const createStoreWithMiddleware = compose(
  applyMiddleware(ReduxThunk, customizedPromiseMiddleware)
)(createStore);

export default function(initialState = {}) {
  return createStoreWithMiddleware(reducers, initialState);
}
