import { Document, Types } from "mongoose";

// Type definitions for user entity and roles:-

export type UserRole = "user" | "admin";

export interface UserInfo {
    _id: Types.ObjectId;
    userName: string;
    userEmail: string;
    userPassword?: string;
    role: UserRole;
    createdAt: Date;
    updatedAt: Date;
}

export interface UserDocument extends Document, Omit<UserInfo, "_id"> {
    _id: Types.ObjectId
}