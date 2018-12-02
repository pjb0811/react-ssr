import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import serialize from 'serialize-javascript';
import App from '../App';
import routes from './routes';

const renderer = async ({ req, html }) => {
  const currentRoute = routes.find(route => matchPath(req.url, route)) || {};
  const data = currentRoute.loadData
    ? await currentRoute.loadData(req.url)
    : await Promise.resolve(null);

  const context = { data };

  const app = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  return {
    html: html
      .replace('<div id="root"></div>', `<div id="root">${app}</div>`)
      .replace(
        '</body>',
        `<script>window.__INITIAL_STATE__ = ${serialize(data)}</script></body>`
      ),
    context
  };
};

module.exports = renderer;
