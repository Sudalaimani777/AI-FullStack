import type { Request, Response } from "express";
import { UserInfoModel } from "../../model/index.js";



const profileController = async (request: Request, response: Response): Promise<void> => {
    try {
        const { user } = request;

        if (!user) {
            response.status(404).json({
                message: "User Not Found"
            })
            return;
        }

        const authorizedUser = await UserInfoModel.findById(user._id).select("-user_password");

        response.status(200).json({
            message: "User Fetched Successfully",
            authorizedUser
        })


    } catch (error: any) {
        
    }
}

export default profileController;