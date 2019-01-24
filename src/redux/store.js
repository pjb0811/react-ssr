import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

const createStoreWithMiddleware = compose(
  applyMiddleware(
    ReduxThunk,
    promiseMiddleware({
      promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR'],
    })
  )
)(createStore);

export default (initialState = {}) => {
  /* return createStore(
    reducers
  ) */
  return createStoreWithMiddleware(reducers, initialState);
};
