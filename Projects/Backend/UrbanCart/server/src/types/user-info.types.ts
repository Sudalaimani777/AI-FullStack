import { Document } from "mongoose";

export interface UserInfo extends Document {
    user_name: string,
    user_email: string,
    user_password?: string, //Optional for Google Auth User
    firebase_uid?: string,
    auth_provider: "local" | "google",
    avatar?: string,
    is_admin: boolean
}