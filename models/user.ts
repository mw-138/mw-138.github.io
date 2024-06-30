import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Must provide a name"],
    },
    email: {
      type: String,
      required: [true, "Must provide an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Must provide a password"],
    },
  },
  { timestamps: true },
);

const User = models.User || mongoose.model("User", userSchema);

export default User;
