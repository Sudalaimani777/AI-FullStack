import User_Data_Model from "../model/user-data.model.js"
import bcrypt from "bcrypt";
const userRegisterController = async (request, response) => {
    try {
        const { name, email, password } = request.body;

        if (!name || !email || !password) {
            return response.status(422).json({
                "message": "Enter a valid User Credentials"
            })
        }

        const checkExistEmail = await User_Data_Model.findOne({email});

        if(checkExistEmail){
            return response.status(409).json({
                "message":"Email Already Exists",
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const registeredUser = await User_Data_Model.create({ name, email, password: hashedPassword });

        response.status(201).json({
            "message":"User Registered Successfully",
            "User_Data": registeredUser
        })

    } catch (err) {
        response.status(500).json({
            "message":"Unable to register the user data",
            "Error_Message": err.message
        })
    }
}

export default userRegisterController;