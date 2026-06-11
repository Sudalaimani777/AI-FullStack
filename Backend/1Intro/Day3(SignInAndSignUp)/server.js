import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./Config/db.js";
import { newUser } from "./Model/user.model.js";
import bcrypt from "bcryptjs";

dotenv.config();
connectDB();

//Taking the express module and creating an instance of it to use in our application
const app = express();
const PORT = 5000;

app.use(express.json()); // Middleware to parse JSON bodies from incoming requests

app.get("/", (request, response) => {
    response.send("The server is up and running");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.post("/api/auth/signup", async (request, response) => {
    try {
        const { name, email, password } = request.body;
        const user = new newUser({
            name,
            email,
            password: await bcrypt.hash(password, 10) // Hashing the password before saving it to the database. 
        })
        //save the data in MongoDB :-
        await user.save();

        response.status(201).json({
            message: "User registered successfully"
        })
    } catch (err) {
        console.log(err);
        response.status(500).json({
            message: "Internal Server Error"
        })
    }
})

app.post("/api/auth/signin", async (request, response) => {
    try {

        //Destructuring the email and the password in the body
        const { email, password } = request.body;
        const user = await newUser.findOne({ email }); //Checking the email is exist in the mongo db

        if (!user) {
            response.status(404).json({
                message: "User not found"
            })
        }

        //Validate the password is match in the DB (hashed)
        const passwordCorrect = await bcrypt.compare(password, user.password);

        if (!passwordCorrect) {
            response.status(401).json({
                message: "Invalid credentials"
            })
        }

        response.status(200).json({
            message: "User signed in successfully"
        })

    } catch (err) {
        console.log(err);
        response.status(500).json({
            message: "Internal Server Error"
        })

    }
})