import type { Request, Response } from "express";
import { userModel } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export default async function getUserController(req: Request, res: Response) {
    const userId = (req as any).user?.id;

    if (!userId) {
        return res.status(401).json({ message: "Unauthorized. User ID not found in token." });
    }

    const user = await userModel.findById(userId).select("-password"); // Exclude password from the response

    if (!user) {
        return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json({message: "User information retrieved successfully",user });

}
