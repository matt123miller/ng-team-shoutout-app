/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { colleaguesList } from '@m11r/colleagues-list';
import express from 'express';
import * as path from 'path';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to server!' });
});

app.get('/api/colleagues', (req, res) => {
  res.json({
    data: colleaguesList(),
  });
});

// const port = process.env.PORT || 3333;
const port = 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
