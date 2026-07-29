import type { Request, Response } from "express";
import { allUsersData } from "../data/users.js";
import { userSchema } from "../schema/userSchema.js";


export const createUser = async (request: Request, response: Response): Promise<void> => {
    try {
        const user = userSchema.parse(request.body);
        allUsersData.push(user);
        response.status(201).json({
            "message": "User Data created successfully",
            "data": allUsersData
        })
    } catch (err: any) {
        response.status(500).json({
            "message": `Internal server error ${err.message}`
        })
    }
}