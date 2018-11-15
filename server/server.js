import express from 'express';
import fs from 'fs';
import pretty from 'pretty';
import renderer from './renderer';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('build', { index: [] }));

app.all('*', (req, res) => {
  fs.readFile('build/index.html', 'utf8', async (err, data) => {
    if (err) {
      throw err;
    }

    const html = await renderer(data);
    res.send(pretty(html));
  });
});

app.listen(PORT, console.log(`App listening on port ${PORT}!`));
