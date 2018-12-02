const express = require('express');
const fs = require('fs');
const pretty = require('pretty');
const renderer = require('../build.server/lib/renderer');

const app = express();
const PORT = process.env.PORT || 3000;
const indexHTML = fs.readFileSync('build/index.html', 'utf8');

app.use(express.static('build', { index: [] }));

app.all('*', async (req, res) => {
  const { html, context } = await renderer({ req, html: indexHTML });

  if (context.status === 404) {
    res.status(404);
  }

  res.send(pretty(html));
});

app.listen(PORT, console.log(`App listening on port ${PORT}!`));
