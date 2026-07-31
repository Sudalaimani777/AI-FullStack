import { Schema, model } from "mongoose";
import type { UserInformation } from "../types/user-data.type.js";

const userInfoSchema = new Schema<UserInformation>({
    user_name: {
        type: String,
        required: true
    },
    user_email: {
        type: String,
        required: true
    },
    user_password: {
        type: String,
        required: true
    }
},{timestamps:true})

const User_Info_Model = model("user_info_model", userInfoSchema);

export default User_Info_Model;