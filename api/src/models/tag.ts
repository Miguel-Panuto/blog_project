import { Schema, model } from 'mongoose';

const tagSchema = new Schema(
  {
    tag: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: false,
  }
);

export default model('Tag', tagSchema);
