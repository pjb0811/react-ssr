import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

export default (initialState = {}) => {
  return createStore(
    reducers,
    initialState,
    applyMiddleware(
      ReduxThunk,
      promiseMiddleware({
        promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR'],
      })
    )
  );
};
