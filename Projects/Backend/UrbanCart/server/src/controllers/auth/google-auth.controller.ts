import type { Request, Response } from "express";
import { googleAuthService } from "../../services/auth.service.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

const googleAuthController = asyncHandler(async (request: Request, response: Response): Promise<void> => {
    const { idToken } = request.body;
    const data = await googleAuthService(idToken);

    response.cookie("token", data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 30 * 24 * 60 * 60 * 1000 // 30D
    })

    const userPayload = {
        _id: data.userInfo.userId,
        user_name: data.userInfo.userName,
        user_email: data.userInfo.userEmail,
        avatar: data.userInfo.avatar,
        is_admin: data.userInfo.isAdmin
    }

    response.status(200).json({
        message: "Google Authentication Successful",
        user: userPayload,
        userInfo: userPayload,
        token: data.token
    });
});

export default googleAuthController;