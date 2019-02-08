import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import createSagaMiddleware, { END } from 'redux-saga';
// import { createLogger } from 'redux-logger'
// import rootSaga from './sagas';
// import ReduxThunk from 'redux-thunk';
// import promiseMiddleware from 'redux-promise-middleware';

export default (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducers,
    initialState,
    // applyMiddleware(sagaMiddleware, createLogger())
    applyMiddleware(sagaMiddleware)
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  return store;
};
