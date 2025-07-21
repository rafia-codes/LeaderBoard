import mongoose from "mongoose";
import User from "../models/user.js";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected DB");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
