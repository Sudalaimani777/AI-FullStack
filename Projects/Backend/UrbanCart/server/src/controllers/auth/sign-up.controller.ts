import type { Request, Response } from "express";
import { signUpUserService } from "../../services/auth.service.js";
import { asyncHandler } from "../../utils/asyncHandler.js";


const signUpController = asyncHandler(async (request: Request, response: Response): Promise<void> => {
    const data = await signUpUserService(request.body);

    response.cookie("token", data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 30 * 24 * 60 * 60 * 1000 // 30D
    })

    response.status(201).json({
        message: "User Signed Up Successfully",
        user: {
            _id: data.user_Info.user_id,
            user_name: data.user_Info.user_name,
            user_email: data.user_Info.user_email,
            is_admin: false,
        },
    });

});

export default signUpController;