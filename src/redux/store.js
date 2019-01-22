import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

const customizedPromiseMiddleware = promiseMiddleware({
  promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'FAILURE'],
});

const store = createStore(
  reducers,
  applyMiddleware(ReduxThunk, customizedPromiseMiddleware)
);

export default store;
