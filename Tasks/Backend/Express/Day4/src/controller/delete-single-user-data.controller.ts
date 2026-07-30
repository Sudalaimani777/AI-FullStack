import type { Request, Response } from "express";
import User_Model from "../models/userData.model.js";


const deleteUserData = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const deletedUser = await User_Model.findByIdAndDelete(id);

        if (!deletedUser) {
            return response.status(404).json({
                message: "User not found. Cannot delete."
            });
        }

        response.status(200).json({
            "message": "User data was deleted successfully",
            "Deleted_User": deleteUserData
        })
    } catch (err: any) {
        response.status(500).json({
            "message": "Something went wrong while removing the user",
            "Error_Message": err.message
        })
    }
}

export default deleteUserData;