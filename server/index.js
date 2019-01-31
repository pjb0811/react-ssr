const express = require('express');
const fs = require('fs');
const renderer = require('../build.server/lib/renderer');
const Loadable = require('react-loadable');

const app = express();
const PORT = process.env.PORT || 3000;
const indexHTML = fs.readFileSync('build/index.html', 'utf8');

app.use(express.static('build', { index: [] }));

app.all('*', (req, res) => {
  renderer({ req, res, html: indexHTML });
});

Loadable.preloadAll().then(() => {
  app.listen(PORT, console.log(`App listening on port ${PORT}!`));
});
