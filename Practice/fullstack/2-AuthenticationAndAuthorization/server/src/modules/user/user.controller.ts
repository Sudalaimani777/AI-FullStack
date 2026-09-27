import type { Request, Response } from "express";
import { UserService } from "./user.service.js";
import { successResponse, errorResponse } from "../../utils/index.js";

export class UserController {
    constructor(private userService: UserService = new UserService()) { }

    getProfile = async (request: Request, response: Response): Promise<void> => {
        try {
            const userId = (request as any).user.userId;

            if (!userId) {
                errorResponse(response, "Unauthorized", 401);
                return;
            }

            const user = await this.userService.getProfile(userId);
            successResponse(response, "Profile fetched successfully", user, 200)

        } catch (error: any) {

        }
    }
}