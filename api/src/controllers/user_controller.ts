import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import generateToken from '../utils/generateToken';

import User from '../models/user';

class UserController {
  async create(req: Request, res: Response) {
    const user = req.body;

    if (user.secret !== process.env.SECRET)
      return res.status(400).json({ error: 'Não autenticado' });
    if ((await User.countDocuments({})) > 0)
      return res.status(400).json({ error: 'Já existe ADM criado' });

    const { token, cryptedToken } = await generateToken();
    const cryptedPassword = await bcrypt.hash(user.password, 10);

    try {
      await User.create({
        username: user.username,
        password: cryptedPassword,
        tokens: [cryptedToken],
      });
      return res.json({ token });
    } catch (e) {
      return res.status(400).json({ error: e });
    }
  }

  async login(req: Request, res: Response) {
    const { username, password } = req.body;
    const user = (await User.findOne({ username })) as any;
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res
        .status(500)
        .json({ error: 'Invalid username and/or password' });
    }
    try {
      const { token, cryptedToken } = await generateToken();
      user.tokens = [...user.tokens, cryptedToken];
      await user.save();
      return res.status(200).json({ token });
    } catch (e) {
      return res.status(400).json({ error: e });
    }
  }
}

export default UserController;
