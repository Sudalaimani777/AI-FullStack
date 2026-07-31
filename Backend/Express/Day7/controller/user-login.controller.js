import bcrypt from "bcrypt";
import User_Data_Model from "../model/user-data.model.js";

const userLoginController = async (request, response) => {
    try {
        const { email, password } = request.body;

        if (!email || !password) {
            return response.status(400).json({
                "message": "Email or password required"
            })
        }

        const validUser = await User_Data_Model.findOne({ email })

        if (!validUser) {
            return response.status(401).json({
                "message": "Invalid User Credentials"
            })
        }

        const validPassword = await bcrypt.compare(password, validUser.password);

        if (!validPassword) {
            return response.status(401).json({
                "message": 'Invalid credentials'
            })
        }

        return response.status(200).json({
            "message": "User LoggedIn successfully",
            "User_Data": {
                "id": validUser.id,
                "name": validUser.name,
                "email": validUser.email
            }
        })

    } catch (err) {
        console.error("Login Error:", err);
        return response.status(500).json({
            "message": 'Internal server error',
            "Error_Message": err.message
        })
    }
}

export default userLoginController;