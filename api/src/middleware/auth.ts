import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';

import User from '../models/user';

const asyncFilter = async (arr: any[], predicate: any) => {
  const results = await Promise.all(arr.map(predicate));

  return arr.filter((_v, index) => results[index]);
};

const auth = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Not allowed' });

  const parts = authHeader.split(' ');
  const [scheme, token] = parts;

  if ('bearer' !== scheme.toLowerCase())
    return res.status(401).json({ error: 'Token not in correct format' });

  const user = (await User.findOne({})) as any;
  const tokens = user.tokens as string[];
  if (typeof tokens === null) return res.status(400).json({ error: 'Error' });

  for (let i = 0; i < tokens.length; i++) {
    if (await bcrypt.compare(token, tokens[i])) {
      return next();
    } else if (i + 1 >= tokens.length)
      return res.status(400).json({ error: 'Not allowed' });
  }
};

export default auth;
