import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    userPassword: {
        type: String,
        required: true
    }
}, { timestamps: true });

const UserModel = model("user-info", UserSchema);

export default UserModel;