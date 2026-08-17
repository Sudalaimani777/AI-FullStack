import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// @desc : Auth Middleware
// @route : /profile

const authMiddleWare = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    try {

        // Extract the token from the Authorization header
        const token = request.headers.authorization;

        if (!token) {
            response.status(401).json({
                message: "No token found"
            })
            return
        }

        // Check if the token is in the correct format (Bearer <token>)
        const splitToken = token.split(" ")[1];

        if (!splitToken) {
            throw new Error("No Bearer Token Found");
            return;
        }

        console.log("Token -> ", token);

        console.log("Split Token ->", splitToken);

        // Verify the token using the JWT secret
        const jwtSecret = process.env.JWT_SECRET_TOKEN;

        if (!jwtSecret) {
            throw new Error("JWT not found")
            return;
        }

        console.log("JWT TOKEN -> ", jwtSecret);

        // Verify the token and decode it
        const decoded = jwt.verify(splitToken, jwtSecret);

        console.log("Decoded ->", decoded);

        response.status(200).json({
            message:"JWT Success",
            userId: decoded
        })
    } catch (err: any) {
        console.log(err.message);
    }
}

export default authMiddleWare;