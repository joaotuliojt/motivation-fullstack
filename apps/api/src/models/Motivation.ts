import { Document, Model, Schema, model } from "mongoose";

export interface IMotivation extends Document {
  author: string;
  phrase: string;
}

const MotivationSchema = new Schema<IMotivation>(
  {
    author: {
      type: String,
      required: true,
    },
    phrase: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Motivation: Model<IMotivation> = model("motivation", MotivationSchema);