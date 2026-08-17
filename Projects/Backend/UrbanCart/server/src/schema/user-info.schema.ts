import { Schema } from "mongoose";
import type { UserInfo } from "../types/user-info.types.js";

const UserSchema = new Schema<UserInfo>({
    user_name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    user_email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    user_password: {
        type: String,
        required: true,
        minLength: 8
    },
    is_admin:{
        type:Boolean,
        default:false
    }
}, { timestamps: true });

export default UserSchema;