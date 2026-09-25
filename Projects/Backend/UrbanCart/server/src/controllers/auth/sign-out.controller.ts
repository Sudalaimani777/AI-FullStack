import type { Request, Response } from "express";


const signOutController = async (_request: Request, response: Response): Promise<void> => {
    try {
        response.clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax"
        })

        response.status(201).json({
            message: "User Signed Out Successfully"
        })
    } catch (error: any) {
        response.status(500).json({
            message: "Something went wrong while signout",
            error: error.message
        })
    }
}

export default signOutController;