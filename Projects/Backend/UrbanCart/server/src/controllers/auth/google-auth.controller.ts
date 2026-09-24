import type { Request, Response } from "express";
import { googleAuthService } from "../../services/auth.service.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

const googleAuthController = asyncHandler(async (request: Request, response: Response): Promise<void> => {
    const { idToken } = request.body;
    const data = await googleAuthService(idToken);

    response.status(200).json({
        message: "Google Authentication Successful",
        userInfo: {
            ...data.userInfo,
            token: data.token
        }
    });
});

export default googleAuthController;