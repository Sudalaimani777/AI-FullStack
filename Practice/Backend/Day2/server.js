import express from "express";
import { connectDB } from "./Config/db.js";
import dotenv from "dotenv";
import { newUser } from "./Model/user.model.js";

dotenv.config();
connectDB();



const app  = express();
const PORT = 5000;

app.use(express.json()); //When post we need to use the app.use(express.json()) middleware to parse the incoming request body as JSON. This allows us to access the data sent in the request body using req.body in our route handlers. If we don't use this middleware, req.body will be undefined when we try to access it, which is why we need to include it in our Express application.

app.get("/", (request, response) => {
    response.send("The server is running...");
})

app.listen(PORT, () => {
    console.log(`The server is running in port ${PORT}`);
})

app.post("/userdata", async (request, response) => {
    try{
        console.log(request.body);
        const {name, email, password} = request.body;

        const user = newUser({name, email, password});

        //Save the data in the MongoDB :-
        await user.save();

        //Show the response to the client :-
        response.status(201).json({
            message:"User Created Successfully"
        })
    }catch(err){
        response.status(500).json({
            message:"Internal Server Error"
        })
    }
});