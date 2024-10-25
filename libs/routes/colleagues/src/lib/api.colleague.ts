import { getAllColleagues } from '@m11r/db';
import { Router } from 'express';

const _router = Router();

_router.get('/', async (req, res) => {
  const colleagues = await getAllColleagues(req.app.locals['dbClient']);
  res.json({
    data: colleagues,
  });
});

export const router: Router = _router;
