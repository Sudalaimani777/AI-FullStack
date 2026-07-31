import type { Request, Response } from "express";
import User_Info_Model from "../model/user-data.model.js";
import bcrypt from "bcrypt";

const signInController = async (request: Request, response: Response): Promise<void> => {
    try {
        const { user_email, user_password } = request.body;

        if (!user_email || !user_password) {
            response.status(422).json({
                "message": "Enter a valid user email or password"
            })
            return;
        }

        const checkValidUser = await User_Info_Model.findOne({ user_email });

        if (!checkValidUser) {
            response.status(401).json({
                "message": "Invalid User Credentials"
            })
            return;
        }

        const validatePassword = await bcrypt.compare(user_password, checkValidUser.user_password);

        if (!validatePassword) {
            response.status(401).json({
                "message": 'Invalid credentials'
            })
            return;
        }

        response.status(200).json({
            "message": "User LoggedIn successfully",
            "User_Data": {
                "id": checkValidUser.id,
                "name": checkValidUser.user_name,
                "email": checkValidUser.user_email
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