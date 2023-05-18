// Express server side code

import express from 'express';
import * as dictionary from './routes/dictionary.mjs';

const app = express();

app.use(express.static('./client'));
app.use('/api/dictionary', dictionary.router);

app.all('*', (req, res) => {
  res.status(404).send('Resource Not Found');
});

app.listen(8080, () => {
  console.log('server online');
});
