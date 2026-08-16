import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";


const authMiddleWare = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    try {


        const token = request.headers.authorization;

        if (!token) {
            response.status(401).json({
                message: "No token found"
            })
            return
        }

        const splitToken = token.split(" ")[1];

        if (!splitToken) {
            throw new Error("No Bearer Token Found");
            return;
        }

        console.log("Token -> ", token);

        console.log("Split Token ->", splitToken);

        const jwtSecret = process.env.JWT_SECRET_TOKEN;

        if (!jwtSecret) {
            throw new Error("JWT not found")
            return;
        }

        console.log("JWT TOKEN -> ", jwtSecret);

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