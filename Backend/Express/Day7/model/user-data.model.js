import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: String,
    password: String
}, { timestamps: true });

const User_Data_Model = model("user_data_model", userSchema);

export default User_Data_Model;