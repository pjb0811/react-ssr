import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import App from '../App';
import routes from './routes';
// import { matchRoutes } from 'react-router-config';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import stats from '../../build/react-loadable.json';
import serialize from 'serialize-javascript';
// import { Provider } from 'react-redux';
// import store from '../redux/store';
// import rootSaga from '../redux/sagas';
// import pretty from 'pretty';
import { toJS } from 'mobx';
import { Provider } from 'mobx-react';
import { initStore } from '../mobx/Store';

const renderer = async ({ req, html }) => {
  /*
  const matchingRoutes = matchRoutes(routes, req.url);
  const promises = matchingRoutes.map(async ({ route }) => {
    const { loadData } = route;
    return loadData ? await loadData(req.url) : await Promise.resolve(null);
  });
  const [data] = await Promise.all(promises);
  const context = { data };
  */

  const currentRoute = routes.find(route => matchPath(req.url, route)) || {};
  const initState = currentRoute.loadData
    ? await currentRoute.loadData(req.url)
    : {};

  const store = initStore(toJS(initState));
  const context = {};
  let modules = [];

  const app = renderToString(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <StaticRouter location={req.url} context={context}>
        <Provider {...store}>
          <App />
        </Provider>
      </StaticRouter>
    </Loadable.Capture>
  );

  const bundles = getBundles(stats, modules);
  const renderHTML = html.replace(
    '<div id="root"></div>',
    `<div id="root">${app}</div>
    <script>window.__INIT_DATA__ = ${serialize(toJS(store))}</script>
    ${bundles
      .filter(bundle => !bundle.file.includes('.map'))
      .map(bundle => `<script src="${bundle.publicPath}"></script>`)
      .join('\n')}
    `
  );

  return {
    html: renderHTML,
    context,
  };
};

module.exports = renderer;
