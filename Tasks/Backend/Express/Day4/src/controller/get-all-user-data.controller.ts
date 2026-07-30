import type { Request, Response } from "express";
import User_Model from "../models/userData.model.js";


const getAllUserData = async (request:Request, response:Response) => {
    try{
        // const {id} = request.params; // Passing an empty object {} tells Mongoose to return all documents
        const getAllUserInfo = await User_Model.find({});

        if (!getAllUserInfo) {
            return response.status(404).json({
                message: "User not found"
            });
        }

        response.status(200).json({
            "message":"All User Data fetched Successfully",
            "All_User_Info": getAllUserInfo
        })
    }catch(err:any){
        response.status(500).json({
            "message":"Unable to fetch the user details",
            "Error_Message":err.message
        })
    }
}

export default getAllUserData;