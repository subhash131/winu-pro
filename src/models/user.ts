import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: [true, "Please provide a name"] },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  image: {
    type: String,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: String,
  verifyToken: String,
  verifyTokenExpiry: String,
});

export default mongoose.models.User || mongoose.model("User", userSchema);
