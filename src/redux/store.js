import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
// import ReduxThunk from 'redux-thunk';
// import promiseMiddleware from 'redux-promise-middleware';

export default (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(rootSaga);

  // store.run = sagaMiddleware.run;
  // store.close = () => store.dispatch(END);

  return store;
};
