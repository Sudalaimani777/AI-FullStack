import { Document } from "mongoose";

export interface UserInfo extends Document {
    user_name: string,
    user_email: string,
    user_password: string,
    is_admin: boolean
}