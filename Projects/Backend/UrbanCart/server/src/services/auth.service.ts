import { UserInfoModel } from "../models/index.js";
import { ApiError } from "../utils/apiError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUpUserService = async (userData: {
    user_name: string;
    user_email: string;
    user_password: string;
}) => {
    const existingUser = await UserInfoModel.findOne({ user_email: userData.user_email });
    if (existingUser) {
        throw new ApiError(409, "Email Already Exist");
    }

    const hashedPassword = await bcrypt.hash(userData.user_password, 10);

    const newUser = await UserInfoModel.create({
        user_name: userData.user_name,
        user_email: userData.user_email,
        user_password: hashedPassword
    });

    const jwtSecret = process.env.JWT_SECRET_TOKEN;
    if (!jwtSecret) {
        throw new ApiError(500, "JWT Token is not defined");
    }

    const token = jwt.sign({ userId: newUser._id }, jwtSecret, { expiresIn: "30d" });

    return {
        token,
        user_Info: {
            user_id: newUser._id,
            user_email: newUser.user_email,
            user_name: newUser.user_name
        }
    };
};

export const signInUserService = async (email: string, password: string) => {
    const user = await UserInfoModel.findOne({ user_email: email });
    if (!user) {
        throw new ApiError(401, "Email Not exist");
    }

    const isPasswordValid = await bcrypt.compare(password, user.user_password);
    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid Email or Password");
    }

    const jwtSecret = process.env.JWT_SECRET_TOKEN;
    if (!jwtSecret) {
        throw new ApiError(500, "JWT Token is not defined");
    }

    const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: "30d" });

    return {
        token,
        userInfo: {
            userId: user._id,
            userName: user.user_name,
            userEmail: user.user_email,
            isAdmin: user.is_admin
        }
    };
};

export const getUserProfileService = async (userId: string) => {
    const user = await UserInfoModel.findById(userId).select("-user_password");
    if (!user) {
        throw new ApiError(404, "User Not Found");
    }
    return user;
};