import type { Request, Response } from "express";
import { getUserProfileService } from "../../services/auth.service.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

const profileController = asyncHandler(async (request: Request, response: Response): Promise<void> => {
        const authorizedUser = await getUserProfileService(request.user._id);

        response.status(200).json({
            message: "User Fetched Successfully",
            authorizedUser
        });
   
});

export default profileController;