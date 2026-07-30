import { json } from "node:stream/consumers";
import User_Model from "../models/userData.model.js";
import type { Request, Response } from "express";

const sendUserDataController = async(request:Request, response:Response) => {
    try{
        const {user_name, user_email, user_age} = request.body;

        const sendUserData = await User_Model.create({user_name, user_email, user_age});

        response.status(201).json({
            "message":"User Data was posted successfully",
            "User_Data": sendUserData
        })
    }catch(err:any){
        response.status(500).json({
            "message":"Unable to send the user data",
            "Error_Message": err.message
        })
    }
}

export default sendUserDataController;