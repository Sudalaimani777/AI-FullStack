import type { Request, Response } from "express";
import { signInUserService } from "../../services/auth.service.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

const signInController = asyncHandler(async (request: Request, response: Response): Promise<void> => {
    const { user_email, user_password } = request.body;
    const data = await signInUserService(user_email, user_password);

    response.status(200).json({
        message: "User Sign In Successfully",
        userInfo: {
            ...data.userInfo,
            token: data.token
        }
    });
});

export default signInController;