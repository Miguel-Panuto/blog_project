import { Schema, model } from 'mongoose';

export const commentSchema = new Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    post : {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Post',
    }
  },
  {
    timestamps: true,
  }
);

export default model('Comment', commentSchema);
