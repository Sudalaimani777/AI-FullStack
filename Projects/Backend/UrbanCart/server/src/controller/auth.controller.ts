import type { Request, Response } from "express";



const authController = async (request: Request, response: Response): Promise<void> => {
    try {
        response.json({
            message: "This is a protected Route",
            user: request
        })
    } catch (error: any) {
        response.status(500).json({
            message:"Something went wrong with the JWT Bearer"
        })
    }
}

export default authController;