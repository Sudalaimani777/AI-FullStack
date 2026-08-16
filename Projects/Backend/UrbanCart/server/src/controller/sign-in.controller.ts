import type { Request, Response } from "express";
import UserInfoModel from "../model/user-info.model.js";
import bcrypt from "bcrypt";

const signInController = async (request: Request, response: Response): Promise<void> => {
    try {
        const { user_email, user_password } = request.body;

        if (!user_email || !user_password) {
            response.status(422).json({
                message: "Fill the required fields"
            })
            return;
        }

        const validateEmail = await UserInfoModel.findOne({ user_email });

        if (!validateEmail) {
            response.status(401).json({
                message: "Email Not exist"
            })
            return;
        }

        const validatePassword = await bcrypt.compare(user_password, validateEmail.user_password);

        if (!validatePassword) {
            response.status(401).json({
                message: "Invalid Email or Password"
            })
            return;
        }

        response.status(200).json({
            message: "User Sign In Successfully",
            userInfo: {
                userId: validateEmail.id,
                userName: validateEmail.user_name,
                userEmail: validateEmail.user_email
            }
        })
    } catch (err: any) {
        console.error("Sign in error:", err);
        response.status(500).json({
            "message": "SignIn user action failed",
            "Error_Message": err.message
        });
    }
}

export default signInController;