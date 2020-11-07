import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      trim: true,
    },
    tokens: [String],
  },
  {
    timestamps: true,
  }
);

export default model('User', userSchema);
