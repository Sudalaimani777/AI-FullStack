import UserModel from "../model/user.model.js";
import bcrypt from "bcrypt";

const userRegisterController = async (request, response) => {
    try {
        const { userName, userEmail, userPassword } = request.body;

        const invalidRegisterData = !userName || !userEmail || !userPassword;

        if (invalidRegisterData) {
            return response.status(422).json({
                "message": "Enter a valid details to register"
            })
        }

        const checkExistEmail = await UserModel.findOne({ userEmail });

        if (checkExistEmail) {
            return response.status(409).json({
                "message": "Data already exist"
            })
        }

        

    } catch (error) {

    }
}

export default userRegisterController;