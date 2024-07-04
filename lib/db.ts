import mongoose from "mongoose";

const connect = async () => {
  if (mongoose.connections[0].readyState) return;

  if (!process.env.MONGODB_URI) {
    console.log("Error: Invalid/missing environment variable: 'MONGODB_URI'");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw new Error("Error connecting to Mongoose");
  }
};

export default connect;
