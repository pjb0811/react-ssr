import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App';

const renderer = async html => {
  const app = await renderToString(<App />);
  return html.replace('<div id="root"></div>', `<div id="root">${app}</div>`);
};

export default renderer;
