import type { Request, Response } from "express";
import UserInfoModel from "../model/user-info.model.js"
import bcrypt from "bcrypt";


const signUpController = async (request: Request, response: Response): Promise<void> => {
    try {
        const { user_name, user_email, user_password } = request.body;

        const validateUserInfo = !user_name || !user_email || !user_password;

        if (validateUserInfo) {
            response.status(422).json({
                message: "Fill the required fields"
            })
            return;
        }

        const checkEmailExist = await UserInfoModel.findOne({ user_email });

        if (checkEmailExist) {
            response.status(409).json({
                message: "Email Already Exist"
            })
            return;
        }

        const hashedPassword = await bcrypt.hash(user_password, 10);

        const signedUpUser = await UserInfoModel.create({ user_name, user_email, user_password: hashedPassword });

        response.status(201).json({
            message: "User Signed Up Successfully",
            user_Info: {
                user_name,
                user_email,
            }
        })

    } catch (err:any) {
        response.status(500).json({
            "message": "Unable to sign up the user",
            "error_message": err.message
        })
    }
}

export default signUpController;