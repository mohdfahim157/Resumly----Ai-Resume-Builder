import mongoose, { Schema, model, Types } from "mongoose";




async function connectToDB() {
    const URI: string = process.env.MONGO_URI || "";
  if (!URI) {
    throw new Error("MONGO_URI is not defined in .env");
  }

  try {
    await mongoose.connect(URI);
    console.log("Connected To DataBase ");
  } catch (error) {
    if (error instanceof Error) {
    console.log("Connection to DataBase Failed ",error.message)
  }
  }
}

export default connectToDB;
