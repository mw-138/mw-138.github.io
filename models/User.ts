import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: false },
  },
  { timestamps: true },
);

export default models.User || mongoose.model("User", userSchema);
