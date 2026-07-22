import mongoose, { model, Schema, Types } from "mongoose";

// 1. Define the raw document structure
interface IUser {
  username: string;
  email: string;
  password:string;
}

// 2. Create the schema targeting the interface
const userSchema = new Schema<IUser>({
  username: { type: String, required: true ,unique:[true ,"username already taken"] },
  email: { type: String, required: true , unique:[true , "Account already exists with this email address"] },
  // Use Schema.Types.ObjectId inside the schema definition
  password:{type : String,required:true}
});

// 3. Export the compiled model
export const userModel = model<IUser>("User", userSchema);
