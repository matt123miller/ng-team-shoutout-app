/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';

import { router as colleaguesRouter } from '@m11r/api.colleague';
import { getDb } from '@m11r/db';

(async () => {
  const db = await getDb();
  const app = express();

  app.use((req, res, next) => {
    const locals = {
      dbClient: db,
      title: 'Team Shoutout',
    };

    res.typedLocals = res.locals = locals;
    app.typedLocals = app.locals = locals;
    next();
  });

  app.use('/assets', express.static(path.join(__dirname, 'assets')));

  app.get('/api', (req, res) => {
    res.send({ message: 'Welcome to main server!' });
  });

  app.use('/api/colleagues', colleaguesRouter);

  const port = process.env['PORT'] || 3333;

  const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
  });

  server.on('error', console.error);
})();
