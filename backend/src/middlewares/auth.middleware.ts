import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";
import { blacklistModel } from "../models/blacklist.model.js";


export default async function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies.token;
    if(!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    const isTokenBlacklisted = await blacklistModel.findOne({ token });
    if(isTokenBlacklisted) {
        return res.status(401).json({ message: "Access denied. Token is blacklisted." });
    }
    try {
    jwt.verify(token, process.env.JWT_SECRET || "", (err: any, user: any) => {
        if (err) {
            return res.status(403).json({ message: "Invalid or expired token." });
        }
        (req as any).user = user;
        next();
    });}
    catch (error) {
        if (error instanceof Error) {
        return res.status(500).json({ message: "Internal server error." ,error:error.message});
    }
    return res.status(500).json({ message: "Internal server error." ,error:"Unknown error"});
}
}