import { Request, Response } from 'express';

import Tag from '../models/tag';

class TagController {
  async index(req: Request, res: Response) {
    const tags = await Tag.find({}).select('tag -_id').exec();
    const parsedTags = tags.map((tag: any) => tag.tag);
    return res.json(parsedTags);
  }

  async create(req: Request, res: Response) {
    const { tag } = req.body;
    if ((await Tag.find({ tag })).length <= 0) {
      const createTag = (await Tag.create({
        tag,
      })) as any;
      return res.json({ tag: createTag.tag });
    }
    return res.status(500).json({ error: 'Tag já criada' });
  }
}

export default TagController;
