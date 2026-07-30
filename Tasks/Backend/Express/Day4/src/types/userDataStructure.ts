import { Document } from "mongoose";

export interface UserData extends Document {
    user_name:string,
    user_email:string,
    user_age?:number,
}