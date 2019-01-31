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
import { Provider } from 'react-redux';
import store from '../redux/store';
import rootSaga from '../redux/sagas';

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
  const initStore = store(initState);
  const context = {};
  let modules = [];

  const app = renderToString(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <StaticRouter location={req.url} context={context}>
        <Provider store={initStore}>
          <App />
        </Provider>
      </StaticRouter>
    </Loadable.Capture>
  );

  let bundles = getBundles(stats, modules);

  return {
    html: html.replace(
      '<div id="root"></div>',
      `<div id="root">${app}</div>
      <script>window.__INIT_DATA__ = ${serialize(initStore.getState())}</script>
      ${bundles
        .filter(bundle => !bundle.file.includes('.map'))
        .map(bundle => `<script src="${bundle.publicPath}"></script>`)
        .join('\n')}
      `
    ),
    context,
  };
};

module.exports = renderer;
