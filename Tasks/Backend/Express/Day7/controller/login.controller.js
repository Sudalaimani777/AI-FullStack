import UserModel from "../model/user-info.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loginController = async (request, response) => {
    try {
        const { userEmail, userPassword } = request.body;

        const dataValidation = !userEmail || !userPassword;

        if (dataValidation) {
            return response.status(409).json({ message: "Enter the required fields" });
        }

        const user = await UserModel.findOne({ userEmail });

        if (!user) {
            return response.status(404).json({ message: "User Not found" })
        }

        const decryptPassword = await bcrypt.compare(userPassword, user.userPassword);

        if(!decryptPassword){
            return response.status(409).json({message:"Invalid email or password"});
        }

        const jwtSecret = process.env.JWT_SECRET_TOKEN;

        if(!jwtSecret){
            throw new Error("JWT not found");
        }

        const token = jwt.sign(
            {userId:user._id},
            jwtSecret,
            {expiresIn:"30d"}
        )

        response.status(200).json({
            message:"User login successfully",
            userInfo:{
                user,
                token
            }
        })
    } catch (error) {
        response.status(500).json({
            message:`Something went wrong while ${error}`
        })
    }
}

export default loginController;