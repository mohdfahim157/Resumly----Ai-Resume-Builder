import type { Request, Response } from "express";
import { userModel } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export default async function loginUserController(req: Request, res: Response) {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Please provide email and password" });
    }
    
    const user = await userModel.findOne({ email });

    if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid) {
        return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET || "", { expiresIn: "1d" });

    res.cookie("token", token);
    res.status(200).json({ message: "Login successful", user: { id: user._id, username: user.username, email: user.email }, token });


}
