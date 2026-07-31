import { Document } from "mongoose";

export interface UserInformation extends Document{
    user_name:string,
    user_email:string,
    user_password:string
}