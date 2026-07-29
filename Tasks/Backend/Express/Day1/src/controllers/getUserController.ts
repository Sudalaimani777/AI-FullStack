import type { Request, Response } from "express";
import { allUsersData } from "../data/users.js";

export const getUser = async (request: Request, response: Response): Promise<void> => {
    try {
        response.status(200).json({
            "message": "Data received",
            "total-users": allUsersData.length,
            "data": allUsersData
        })
    } catch (err: any) {
        response.status(404).json({
            "message": "Data not found"
        })
    }
}   