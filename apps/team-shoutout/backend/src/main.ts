/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';

import { createDb, getAllColleagues } from '@m11r/db';

(async () => {
  const db = await createDb();
  const app = express();
  app.dbClient = db;

  app.use('/assets', express.static(path.join(__dirname, 'assets')));

  app.get('/api', (req, res) => {
    res.send({ message: 'Welcome to main server!' });
  });

  app.get('/api/colleagues', async (req, res) => {
    const colleagues = await getAllColleagues(req.app.dbClient);
    res.json({
      data: colleagues,
    });
  });

  // const port = process.env.PORT || 3333;
  const port = 3333;
  const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
  });

  server.on('error', console.error);
})();
