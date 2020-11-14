import { Request, Response } from 'express';

import Comment from '../models/comments';
import Post from '../models/post';

class CommentController {
  async index(req: Request, res: Response) {
    const { postId } = req.params;
    const comments = await Comment.find({ post: postId });
    return res.json(comments);
  }

  async create(req: Request, res: Response) {
    const { author, comment } = req.body;
    const { postId } = req.params;
    const post = await Post.findById(postId) as any;
    const newComment = await Comment.create({
      comment,
      author,
      post: postId,
    });
    await post.comments.push(newComment);
    await post.save();

    return res.status(200).json({ ok: 'ok' });
  }

  async delete(req: Request, res: Response) {
    const { _id } = req.params;
    const deletedComment = await Comment.findByIdAndDelete(_id) as any;
    const deleteOnPost = await Post.findById(deletedComment.post) as any;
    deleteOnPost.comments.filter((comment:any) => comment.id !== _id);
    await deleteOnPost.save();
    return res.json({ ok: 'ok' });
  }
}

export default CommentController;