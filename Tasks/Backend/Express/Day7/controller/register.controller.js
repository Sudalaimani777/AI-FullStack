import UserModel from "../model/user-info.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerController = async (request, response) => {
    try {
        const { userName, userEmail, userPassword } = request.body;

        const validateUser = !userName || !userEmail || !userPassword;

        if (validateUser) {
            return response.status(409).json({
                message: "Enter the required fields"
            })
        }

        const checkUserExist = await UserModel.findOne({ userEmail });
        if (checkUserExist) {
            return response.status(409).json({ message: "User already exist" });
        }

        const hashedPassword = await bcrypt.hash(userPassword, 10);

        const createUser = await UserModel.create({ userName, userEmail, userPassword: hashedPassword });

        const jwtSecret = process.env.JWT_SECRET_TOKEN;

        if (!jwtSecret) {
            throw new Error("JWT not found");
        }

        const token = jwt.sign(
            { userId: createUser._id },
            jwtSecret,
            { expiresIn: "30d" }
        )

        response.status(201).json({
            message: "User created successfully",
            createUser,
            token
        })
    } catch (error) {
        response.status(500).json({
            message: `Something went wrong while registration ${error.message}`
        })
    }
}

export default registerController;