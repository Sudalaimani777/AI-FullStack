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


app.post("/register", async (request, response) => {
    try{
        const {name, email, password} = request.body;
        const user = new newUser({
            name,
            email,
            password: await bcrypt.hash(password, 10) // Hashing the password before saving it to the database. 
        })
        //save the data in MongoDB :-
        await user.save();

        response.status(201).json({
            message:"User registered successfully"
        })
    }catch(err){
        console.log(err);
        response.status(500).json({
            message:"Internal Server Error"
        })
    }
})