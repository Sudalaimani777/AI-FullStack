import type { Request, Response } from "express";
import { signInUserService } from "../../services/auth.service.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

const signInController = asyncHandler(async (request: Request, response: Response): Promise<void> => {
    const { user_email, user_password } = request.body;
    const data = await signInUserService(user_email, user_password);

    response.cookie("token", data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 30 * 24 * 60 * 60 * 1000 //30D
    });

    response.status(200).json({
        message: "User Sign In Successfully",
        userInfo: {
            _id: data.userInfo.userId,
            user_name: data.userInfo.userName,
            user_email: data.userInfo.userEmail,
            is_admin: data.userInfo.isAdmin,
        }
    });
});

export default signInController;