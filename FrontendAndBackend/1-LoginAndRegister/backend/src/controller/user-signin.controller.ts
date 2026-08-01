import type { Request, Response } from "express";
import User_Info_Model from "../model/user-info.model.js";
import bcrypt from "bcrypt";

const userSignInController = async (request: Request, response: Response): Promise<void> => {
    try {
        const { userEmail, userPassword } = request.body;

        // Check If the Fields are empty
        if (!userEmail || !userPassword) {
            response.status(422).json({
                "message": "Fill the required fields"
            })
            return;
        }

        // Check Email exist in the DB
        const checkStoredEmail = await User_Info_Model.findOne({ userEmail });

        if (!checkStoredEmail) {
            response.status(401).json({
                "message": "Email Doesn't exist, please signUp to continue"
            })
            return;
        }

        // Password Validation :-
        const validatePassword = await bcrypt.compare(userPassword, checkStoredEmail.userPassword);

        if (!validatePassword) {
            response.status(401).json({
                "message": "Password doesn't match, enter correct password to sign in"
            })
            return;
        }

        response.status(200).json({
            "message": "User Signed In Successfully",
            "User_Info": {
                "user-id": checkStoredEmail.id,
                "user-name": checkStoredEmail.userName,
                "user-email": checkStoredEmail.userEmail
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

export default userSignInController;