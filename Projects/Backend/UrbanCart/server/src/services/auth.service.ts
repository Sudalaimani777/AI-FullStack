import { UserInfoModel } from "../models/index.js";
import { ApiError } from "../utils/apiError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { firebaseAuth } from "../config/firebase.config.js";

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

    if (!user.user_password) {
        throw new ApiError(400, "This account was registered using Google. Please sign in with Google.");
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

// Google Authentication :-
export const googleAuthService = async (idToken: string) => {
    if (!firebaseAuth) {
        throw new ApiError(500, "Firebase Admin is not configured on the server");
    }

    // 1. Verify the Firebase token
    let decodedToken;
    try {
        decodedToken = await firebaseAuth.verifyIdToken(idToken);
    } catch (error) {
        throw new ApiError(401, "Invalid or expired Firebase ID token");
    }

    const { email, name, uid, picture } = decodedToken;

    if (!email) {
        throw new ApiError(400, "Google account does not provide an email");
    }

    // 2. Find existing user by email or firebase_uid
    let user = await UserInfoModel.findOne({
        $or: [{ user_email: email }, { firebase_uid: uid }]
    });

    // 3. If user doesn't exist, create one (Sign Up)
    if (!user) {
        user = await UserInfoModel.create({
            user_name: name || email.split("@")[0],
            user_email: email,
            firebase_uid: uid,
            auth_provider: "google",
            avatar: picture || ""
        });
    } else {
        // Link firebase_uid & avatar if user originally registered locally
        let updated = false;
        if (!user.firebase_uid) {
            user.firebase_uid = uid;
            updated = true;
        }
        if (picture && !user.avatar) {
            user.avatar = picture;
            updated = true;
        }
        if (updated) {
            await user.save();
        }
    }

    // 4. Generate your app's JWT token
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
            avatar: user.avatar,
            isAdmin: user.is_admin
        }
    };
};