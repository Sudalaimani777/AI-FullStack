import { Schema, model } from "mongoose";
import type { UserData } from "../types/userDataStructure.js";

const userDataSchema = new Schema<UserData>({
    user_name: {
        type: String,
        required: true
    },
    user_email: {
        type: String,
        required: true
    },
    user_age: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const User_Model = model<UserData>("User_Model", userDataSchema);
export default User_Model;