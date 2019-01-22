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
  currentRoute.loadData
    ? await currentRoute.loadData(req.url)
    : await Promise.resolve(null);

  const context = { data: serialize(store.getState()) };
  let modules = [];

  const app = renderToString(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <StaticRouter location={req.url} context={context}>
        <Provider store={store}>
          <App />
        </Provider>
      </StaticRouter>
    </Loadable.Capture>
  );

  let bundles = getBundles(stats, modules);

  return {
    html: html
      .replace(
        '<div id="root"></div>',
        `<div id="root">${app}</div>
        <script>window.__ROUTE_DATA__ = ${serialize(store.getState())}</script>`
      )
      .replace(
        '</body>',
        `${bundles
          .filter(bundle => !bundle.file.includes('.map'))
          .map(bundle => `<script src="${bundle.publicPath}"></script>`)
          .join('\n')}
        </body>`
      ),
    context,
  };
};

module.exports = renderer;
