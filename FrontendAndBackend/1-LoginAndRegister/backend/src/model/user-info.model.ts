import { Schema, model } from "mongoose";
import type { UserInfo } from "../types/user-info-data.type.js";

const UserInfoSchema = new Schema<UserInfo>({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    userEmail: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    userPassword: {
        type: String,
        required: true
    }
}, { timestamps: true });

const User_Info_Model = model("user-info-model", UserInfoSchema);

export default User_Info_Model;