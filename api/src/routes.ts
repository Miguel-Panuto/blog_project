import { Router } from 'express';

import auth from './middleware/auth';
import upload from './utils/upload';

import UserController from './controllers/user_controller';
import TagController from './controllers/tag_controller';
import PostController from './controllers/post_controller';
import DateController from './controllers/date_controller';
import CommentController from './controllers/comment_controller';

const routes = Router();

const userController = new UserController();
const tagController = new TagController();
const postController = new PostController();
const dateController = new DateController();
const commentController = new CommentController();

// Test
routes.get('/try_connect', auth, (req, res) => {
  res.json({ ok: 'ok' });
});

// User
routes.post('/database/user', userController.create);
routes.post('/database/login', userController.login);

// Posts
routes.post(
  '/database/post',
  auth,
  upload.single('thumbnail'),
  postController.create
);
routes.get('/database/post/:id', postController.show);
routes.get('/database/posts/:pg', postController.index);
routes.delete('/database/post/:id', auth, postController.delete);

// Comment
routes.get('/database/comment/:postId', commentController.index);
routes.post('/database/comment/:postId', commentController.create);
routes.delete('/database/comment/:_id', commentController.delete);

// Tag
routes.post('/database/tag', auth, tagController.create);
routes.get('/database/tag', tagController.index);

// Date
routes.get('/database/dates/post', dateController.getMonthsAndYears);

// Upload inside article
routes.post('/upload/image', auth, upload.single('file'), (req, res) => {
  return res.status(200).json({ image: `uploads/${req.file.filename}` });
});

export default routes;
