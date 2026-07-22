import type { Request, Response } from "express";
import { userModel } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default async function registerUserController(
  req: Request,
  res: Response
) {
  const { username, email, password } = req.body;

  if (!username || !email ||!password) {
    return res.status(400).json({message:"Please provide username email password"})
  }

  const isUserAlreadyExists = await userModel.findOne({ $or: [{ username }, { email }] });

    if (isUserAlreadyExists) {
        return res.status(400).json({message:"User already exists with this username or email"})
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new userModel({
        username,
        email,
        password: hashedPassword
    }); 

    const jwtSecret = process.env.JWT_SECRET || "";
    if (!jwtSecret) {
        return res.status(500).json({message:"JWT_SECRET is not defined in .env"});
    }
    const token = jwt.sign({ id: user._id , username: user.username }, jwtSecret, { expiresIn: "1d" });

        res.cookie("token", token)
    try {
        await user.save();
        return res.status(201).json({message:"User registered successfully",user:{id:user._id,username:user.username,email:user.email},token}); }
     catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({message:error.message});
        }
    }
}