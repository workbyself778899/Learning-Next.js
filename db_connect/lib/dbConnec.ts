// lib/mongodb.js
import mongoose from 'mongoose';

const MONGO_URL = process.env.MONGO_URL as string;  // Store MongoDB connection string
let isConnected:boolean = false;  // Track the connection status

export default async function dbConnect() {
  // Check the string is available or not.
  if (!MONGO_URL) {
    throw new Error('Please define the MONGODB_URI environment variable');
  }
  // Check the connection status
  if(isConnected){
    console.log("Already Connected");
    return mongoose;
  }
  try {
     await mongoose.connect(MONGO_URL,{
      dbName:"shop"
     });
     console.log("Mongoose is connected");
     isConnected = true;
       return mongoose;
  } catch (error) {
    console.log("Error in connection", error)
  }


}