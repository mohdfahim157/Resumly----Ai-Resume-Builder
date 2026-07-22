import type { Request, Response } from "express";
import { blacklistModel } from "../models/blacklist.model.js";



export default async function logoutUserController(req: Request, res: Response) {

    const token: string | undefined = req.cookies.token;
    if(token){
        await blacklistModel.create({token})
        res.clearCookie("token");
        return res.status(200).json({message:"Logout successful"})
    }
    return res.status(400).json({message:"No token found in cookies"})

}
