import mongoose from 'mongoose';

export async function connectMongoDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI as string)
    console.log("Mongo successfully connected!")
  } catch (error: any) {
    throw new Error(error)
  }
}