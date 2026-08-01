import type { Request, Response } from "express";
import User_Info_Model from "../model/user-info.model.js";
import bcrypt from "bcrypt";

const userSignUpController = async (request: Request, response: Response): Promise<void> => {
    try {
        const { userName, userEmail, userPassword } = request.body;

        // Check if the fields are not exists :-
        if (!userName || !userEmail || !userPassword) {
            response.status(422).json({
                "message": "Fill the valid credentials"
            })
            return;
        }

        // Check if the Sign up email is already exists :-
        const checkExistingEmail = await User_Info_Model.findOne({ userEmail });

        if (checkExistingEmail) {
            response.status(409).json({
                "message": "Email already exists"
            })
            return;
        }

        // Hashing Password :-
        const hashedPassword = await bcrypt.hash(userPassword, 10);

        // Push the user data in the model :-
        const signedUpUser = await User_Info_Model.create({ userName, userEmail, userPassword: hashedPassword });

        // Response for the signed up user :-
        response.status(201).json({
            "message": "User Signed Up Successfully",
            "User_Info": {
                "user-id": signedUpUser._id,
                "user-name": signedUpUser.userName,
                "user-email": signedUpUser.userEmail
            }
        });
    } catch (err: any) {
        response.status(500).json({
            "message": "Unable to sign up the user",
            "error_message": err.message
        })
    }
}
export default userSignUpController;