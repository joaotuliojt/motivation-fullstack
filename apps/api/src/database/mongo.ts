import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server-global'
import { config } from '../config';

let mongod: MongoMemoryServer | null = null;

export async function connectMongoDB() {
  try {
    let dbUrl = config.MONGO_URI;
    if (process.env.NODE_ENV === "test") {
      mongod = await MongoMemoryServer.create();
      dbUrl = mongod.getUri();
    }
    const conn = await mongoose.connect(dbUrl)
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.log(error);
    process.exit(1)
  }
}

export async function disconnectDB() {
  try {
    await mongoose.connection.close();
    if (mongod) {
      await mongod.stop()
    }
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}