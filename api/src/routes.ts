import { Router } from 'express';

import auth from './middleware/auth';

import UserController from './controllers/user_controller';

const routes = Router();

const userController = new UserController();

routes.get('/', (req, res) => {
  res.json({ ok: 'ok' });
});

routes.post('/database/user', userController.create);

routes.post('/database/post', auth, (req, res) => {
  return res.json({ ok: 'ok' });
});

routes.post('/database/login', userController.login);

export default routes;
