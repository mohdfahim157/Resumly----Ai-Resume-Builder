import mongoose, { model, Schema, Types } from "mongoose";

// 1. Define the raw document structure
interface IToken {
  token: string;
}

// 2. Create the schema targeting the interface
const blacklistSchema = new Schema<IToken>({
  token: { type: String, required: [true, "Token is required"] } 
},{ timestamps: true});

// 3. Export the compiled model
export const blacklistModel = model<IToken>("Blacklist", blacklistSchema);
