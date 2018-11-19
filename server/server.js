import express from 'express';
import fs from 'fs';
import pretty from 'pretty';
import renderer from './renderer';

const app = express();
const PORT = process.env.PORT || 3000;
const indexHTML = fs.readFileSync('build/index.html', 'utf8');

app.use(express.static('build', { index: [] }));

app.all('*', async (req, res) => {
  const html = await renderer(indexHTML);
  res.send(pretty(html));
});

app.listen(PORT, console.log(`App listening on port ${PORT}!`));
