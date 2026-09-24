import { model, Schema } from "mongoose";
import type { UserInfo } from "../types/user-info.types.js";

const UserSchema = new Schema<UserInfo>({
    user_name: {
        type: String,
        required: true,
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
        required: false, // Not required for Google OAuth
        minLength: 8
    },
    firebase_uid: {
        type: String,
        sparse: true,
        unique: true
    },
    auth_provider: {
        type: String,
        enum: ["local", "google"],
        default: "local"
    },
    avatar: {
        type: String,
        default: ""
    },
    is_admin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const UserInfoModel = model<UserInfo>("user-info-model", UserSchema);
export default UserInfoModel;