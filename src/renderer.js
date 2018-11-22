import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

const renderer = async html => {
  const app = await renderToString(<App />);
  return html.replace('<div id="root"></div>', `<div id="root">${app}</div>`);
};

module.exports = renderer;
