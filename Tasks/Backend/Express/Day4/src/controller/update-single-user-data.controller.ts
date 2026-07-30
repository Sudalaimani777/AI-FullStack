import type { Request, Response } from "express";
import User_Model from "../models/userData.model.js";


const updateUserData = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const toUpdateUserData = request.body;

        const updatedUserData = await User_Model.findByIdAndUpdate(
            id,
            toUpdateUserData,
            {
                new: true, // Returns the updated document instead of the old one
                runValidators: true // Forces Mongoose to validate the new data against your Schema
            }
        );

        if (!updatedUserData) {
            return response.status(404).json({
                "message": "User not found. Cannot update."
            })
        };

        response.status(200).json({
            "message": "User Data Updated successfully",
            "Updated_User_Info": updatedUserData
        })
    } catch (err: any) {
        response.status(500).json({
            "message": "Unable to update the user details",
            "Error_Message": err.message
        });
    }
}

export default updateUserData;