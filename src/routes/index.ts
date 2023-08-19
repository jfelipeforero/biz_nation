import express from 'express';

import { authController } from './auth';
import { charactersRouter } from './character';
import { genresRouter } from './genre'
import { movieshowRouter } from './movieshow';

export function routerApi(app: express.Application) {
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/auth', authController)
  router.use('/characters', charactersRouter)
  router.use('/genre', genresRouter);
  router.use('/movies', movieshowRouter)
}

