import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.Router().get('*', (req, res) => res.send('hello!')));

app.listen(PORT, console.log(`App listening on port ${PORT}!`));
