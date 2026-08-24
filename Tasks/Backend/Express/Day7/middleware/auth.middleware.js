import jwt from "jsonwebtoken";
import UserModel from "../model/user-info.model.js"

const authMiddleware = async(request, response, next) => {
    try {
        const token = request.headers.authorization;

        if(!token){
            response.status(404).json({message:"Bearer token not found"});
            return;
        }

        const splitToken = token.split(" ")[1];


        if(!splitToken){
            return response.status(404).json({message:"Token not found"})
        }

        const jwtSecret = process.env.JWT_SECRET_TOKEN;

        if(!jwtSecret){
            return response.status(404).json({message:"JWT secret not found"});
        }

        const decoded = jwt.verify(splitToken, jwtSecret);

        console.log(decoded);
    } catch (error) {
        
    }
}