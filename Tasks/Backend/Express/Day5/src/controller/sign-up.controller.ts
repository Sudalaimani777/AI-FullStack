import type { Request, Response } from "express";
import User_Info_Model from "../model/user-data.model.js";
import bcrypt from "bcrypt";


const signUpController = async (request: Request, response: Response): Promise<void> => {
    try {
        const { user_name, user_email, user_password } = request.body;

        if (!user_name || !user_email || !user_password) {
            response.status(422).json({
                "message": "Enter a valid user credentials"
            })
            return;
        }

        const checkExistEmail = await User_Info_Model.findOne({ user_email });

        if (checkExistEmail) {
            response.status(409).json({
                "message": "User Email is already exists"
            })
            return;
        }

        const hashedPassword = await bcrypt.hash(user_password, 10);

        const signUpUser = await User_Info_Model.create({ user_name, user_email, user_password: hashedPassword });

        response.status(201).json({
            "message": "User Signed Up successfully",
            "SignUp_User_Info": signUpUser
        })
    } catch (err: any) {
        response.status(500).json({
            "message": "SignUp user action failed",
            "Error_Message": err.message
        })
    }
}

export default signUpController;