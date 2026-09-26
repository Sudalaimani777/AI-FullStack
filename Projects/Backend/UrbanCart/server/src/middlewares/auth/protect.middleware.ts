import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UserInfoModel } from "../../models/index.js";

// @desc : Auth Middleware
// @route : /profile
const protectMiddleWare = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    try {
        // 1. Extract token from cookie (primary) or Bearer header (fallback)
        let token = request.cookies?.token;

        if (!token && request.headers.authorization) {
            token = request.headers.authorization.split(" ")[1];
        }

        // 2. If no token at all, return 401 (guest user, not 404 or 500)
        if (!token) {
            response.status(401).json({
                message: "Unauthorized: No session token found",
            });
            return;
        }

        const jwtSecret = process.env.JWT_SECRET_TOKEN;
        if (!jwtSecret) {
            response.status(500).json({
                message: "Server Configuration Error: JWT Secret Not Configured",
            });
            return;
        }

        // 3. Verify JWT token safely
        let decoded: any;
        try {
            decoded = jwt.verify(token, jwtSecret);
        } catch (jwtErr) {
            // Invalid or expired token: clear the bad cookie so it stops failing
            response.clearCookie("token", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
            });
            response.status(401).json({
                message: "Unauthorized: Session expired or invalid",
            });
            return;
        }

        // 4. Validate decoded payload
        if (typeof decoded === "string" || !("userId" in decoded)) {
            response.clearCookie("token", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
            });
            response.status(401).json({
                message: "Unauthorized: Invalid token payload",
            });
            return;
        }

        // 5. Look up user in database
        const user = await UserInfoModel.findById(decoded.userId).select("-user_password");

        if (!user) {
            response.clearCookie("token", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
            });
            response.status(401).json({
                message: "Unauthorized: User account no longer exists",
            });
            return;
        }

        request.user = user;
        next();
    } catch (err: unknown) {
        response.status(500).json({
            message: "Internal Server Error in authentication middleware",
            err,
        });
    }
};

export default protectMiddleWare;