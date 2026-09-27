import { Schema, model } from "mongoose";
import type { UserDocument } from "./user.types.js";

const userSchema = new Schema<UserDocument>({
    userName: {
        type: String,
        required: [true, "Name is required"],
        trim: true
    },
    userEmail: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true
    },
    userPassword: {
        type: String,
        required: [true, "Password is required"],
        select: false
    },
    role: {
        type: String,
        enum: ["user", "password"],
        default: "user"
    }
}, { timestamps: true })

export const UserModel = model<UserDocument>("User", userSchema);