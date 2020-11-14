import { Request, Response } from 'express';

import Post from '../models/post';
import Comment from '../models/comments';

import { errorMessage } from '../utils/messages';

class PostController {
  async show(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const post = await Post.findById(id).populate('comments').exec();
      res.status(200).json(post);
    } catch (error) {
      return res.status(500).json(errorMessage);
    }
  }

  async index(req: Request, res: Response) {
    const { tag, month, year } = req.query;
    const pg: number = req.params.pg ? parseInt(req.params.pg as string) : 0;
    const qtyPerPage: number = req.query.qty
      ? parseInt(req.query.qty as string)
      : 10;
    try {
      let argumentsToFind;
      if (tag) {
        argumentsToFind = { tags: tag };
      } else if (year && month) {
        const firstDay = new Date(
          parseInt(year.toString()),
          parseInt(month.toString()) - 1,
          1
        );
        const lastDay = new Date(
          parseInt(year.toString()),
          parseInt(month.toString()),
          0
        );
        argumentsToFind = {
          createdAt: { $gte: firstDay, $lt: lastDay },
        };
      } else {
        argumentsToFind = {};
      }
      const posts = await Post.find(argumentsToFind)
        .limit(qtyPerPage)
        .skip(pg * qtyPerPage)
        .sort('-createdAt')
        .exec();
      const count = (await Post.find(argumentsToFind).select('_id')).length;

      return res.status(200).json({ posts, count });
    } catch (error) {
      return res.status(500).json(errorMessage);
    }
  }

  async create(req: Request, res: Response) {
    const { title, content } = req.body;
    const tags = JSON.parse(req.body.tags);
    const thumbnail = req.file.filename;
    try {
      const post = await Post.create({
        title,
        content,
        thumbnail,
        tags,
      });

      return res.json({ ok: 'criado', id: post._id });
    } catch (e) {
      return res.status(500).json(errorMessage);
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    if (id === undefined) return res.status(500).json({ error: 'Erro' });
    try {
      await Comment.deleteMany({ post: id });
      await Post.findByIdAndDelete(id);
      return res.status(200).json({ ok: 'ok' });
    } catch (error) {
      return res.status(500).json(errorMessage);
    }
  }
}

export default PostController;
