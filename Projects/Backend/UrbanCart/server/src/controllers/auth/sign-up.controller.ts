import type { Request, Response } from "express";
import { signUpUserService } from "../../services/auth.service.js";
import { asyncHandler } from "../../utils/asyncHandler.js";


const signUpController = asyncHandler(async (request: Request, response: Response): Promise<void> => {
    const data = await signUpUserService(request.body);

    response.status(201).json({
        message: "User Signed Up Successfully",
        token: data.token,
        user_Info: data.user_Info
    });

});

export default signUpController;