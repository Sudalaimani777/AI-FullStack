import { Schema } from "mongoose";

export const UserSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    userPassword:{
        type:String,
        required:true
    }
});


