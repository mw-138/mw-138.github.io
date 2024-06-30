import mongoose from "mongoose";

const connection: { isConnected?: number } = {};

export default async function connectMongoDB(): Promise<void> {
  if (connection.isConnected) {
    return;
  }

  if (!process.env.MONGODB_URI) {
    console.log("Error: Invalid/missing environment variable: 'MONGODB_URI'");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI!);
    connection.isConnected = db.connections[0].readyState;

    if (connection.isConnected === 1) {
      console.log("Connected to MongoDB");
    } else {
      console.log("Failed to connect to MongoDB");
    }
  } catch (error) {
    console.log("Failed to connect to MongoDB: ", error);
  }
}
