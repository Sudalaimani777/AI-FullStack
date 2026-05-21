import mongoose from "mongoose";
import { Schema } from "mongoose";

const users = new Schema({
    name:{
        type:String
    },
    email:{
        type:String,
    },
    password:{
        type:String
    }
})

export const newUser = mongoose.model("New User", users);