import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UserInfoModel } from "../../model/index.js"

// @desc : Auth Middleware
// @route : /profile

// const authMiddleWare = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
//     try {

//         // Extract the token from the Authorization header
//         const token = request.headers.authorization;

//         if (!token) {
//             response.status(401).json({
//                 message: "No token found"
//             })
//             return
//         }

//         // Check if the token is in the correct format (Bearer <token>)
//         const splitToken = token.split(" ")[1];

//         if (!splitToken) {
//             throw new Error("No Bearer Token Found");
//             return;
//         }

//         console.log("Token -> ", token);

//         console.log("Split Token ->", splitToken);

//         // Verify the token using the JWT secret
//         const jwtSecret = process.env.JWT_SECRET_TOKEN;

//         if (!jwtSecret) {
//             throw new Error("JWT not found")
//             return;
//         }

//         console.log("JWT TOKEN -> ", jwtSecret);

//         // Verify the token and decode it
//         const decoded = jwt.verify(splitToken, jwtSecret);

//         console.log("Decoded ->", decoded);

//         response.status(200).json({
//             message:"JWT Success",
//             userId: decoded
//         })
//     } catch (err: any) {
//         console.log(err.message);
//     }
// }
// export default authMiddleWare;

const protectMiddleWare = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    try {

        const token = request.headers.authorization;
        
        if (!token) {
            response.status(404).json({
                message: "Token Not Found"
            })
            return;
        }

        const splitBearerToken = token.split(" ")[1];

        if (!splitBearerToken) {
            response.status(404).json({
                message: "Bearer Not Found"
            });
            return;
        }

        const jwtSecret = process.env.JWT_SECRET_TOKEN;

        if (!jwtSecret) {
            response.status(404).json({
                message: "JWT Secret Not Found"
            });
            return;
        }

        const decoded = jwt.verify(splitBearerToken, jwtSecret);

        if (typeof decoded === "string" || !("userId" in decoded)) {
            response.status(401).json({
                message: "Invalid Token Payload"
            });
            return;
        }

        const user = await UserInfoModel.findById(decoded.userId).select("-user_password"); //The -select is used to neglect the key and the value which is present in the user object

        if(!user){
            response.status(404).json({
                message:"User not found"
            });
            return;
        }

        request.user = user;

        next();
        return;

        // response.status(200).json({
        //     message:"User moves profile successfully",
        //     user,
        //     decoded
        // })
        
    } catch (err: any) {
        response.status(500).json({
            message:"Something went wrong in the profile middleware",
            err
        });
        return;
    }
}

export default protectMiddleWare;