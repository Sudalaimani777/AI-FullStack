import type { Request, Response } from "express";
import User_Model from "../models/userData.model.js";


const getSingleUserData = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const getSingleUser = await User_Model.findById(id);

        if (!getSingleUser) {
            return response.status(404).json({
                message: "User not found"
            });
        }

        response.status(200).json({
            "message": "Single User Fetched Successfully",
            "Single_User": getSingleUser
        })
    } catch (err: any) {
        response.status(500).json({
            message: "Unable to fetch the user details",
            Error_Message: err.message
        });
    }
}

export default getSingleUserData;