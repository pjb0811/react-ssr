import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
// import Loadable from 'react-loadable';
// import { Provider } from 'react-redux';
// import store from './redux/store';
// import rootSaga from './redux/sagas';
import { Provider } from 'mobx-react';
import { initStore } from './mobx/Store';

// const initStore = store(window.__INIT_DATA__ || {});
// initStore.runSaga(rootSaga);

ReactDOM.render(
  <BrowserRouter>
    <Provider {...initStore(window.__INIT_DATA__)}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

/*
const renderMethod = !!module.hot ? ReactDOM.render : ReactDOM.hydrate;
const render = Component => {
  renderMethod(
    <BrowserRouter>
      <Component />
    </BrowserRouter>,
    document.getElementById('root')
  );
};
*/

// Loadable.preloadReady().then(() => {
// });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
