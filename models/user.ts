import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String, 
  image: String,
  createdAt: { type: Date, default: Date.now },
});

export const User = models.User || model("User", userSchema);