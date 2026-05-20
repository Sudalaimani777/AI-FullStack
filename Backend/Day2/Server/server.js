import express from "express";

import dotenv from "dotenv"; // Importing the dotenv package to load environment variables from a .env file to process.env
import { connectDB } from "./Config/db.js"; // Importing the connectDB function from the db.js file located in the Config folder. This function is responsible for connecting to the MongoDB database using Mongoose.

import { User } from "./Model/user.model.js";

dotenv.config(); // Calling the config() method of the dotenv package to load the environment variables from the .env file into process.env. This allows us to access the MONGO_URI variable in our code, which contains the connection string for our MongoDB database.

connectDB(); // Calling the connectDB function to establish a connection to the MongoDB database. This is important to ensure that our application can interact with the database before handling any requests.


const app = express();
app.use(express.json()); //Output undefined nu vandha -> express json ah allow pannala nu meaning

const PORT = 5000;

app.get("/", (request, response) => {
    response.send("The server is running...");
});

app.listen(PORT, () => {
    console.log(`The port is running on ${PORT}`)
});

// This is a POST route handler for the "/user" endpoint. It is an asynchronous function that handles incoming requests to create a new user in the database. The function uses a try-catch block to handle any potential errors that may occur during the process of creating and saving a new user.
app.post("/user", async (req, res) => {
    try {
        console.log(req.body);
        const { name, email, password } = req.body; // Destructuring the name, email, and password properties from the request body. This allows us to easily access these values when creating a new user in the database.

        // Creating a new instance of the User model using the values extracted from the request body. The User model is defined in the user.model.js file and represents the structure of a user document in the MongoDB database. By creating a new instance of the User model, we can easily save it to the database using Mongoose's save() method.
        const newUser = new User({
            name,
            email,
            password
        })

        // Saving the new user to the database using the save() method provided by Mongoose. This method returns a promise, so we use await to wait for the save operation to complete before proceeding. If the save operation is successful, we send a response back to the client with a status code of 201 (Created) and a JSON object containing a success message and the newly created user. If there is an error during the save operation, we catch it and log it to the console.
        await newUser.save();

        // Sending a response back to the client with a status code of 201 (Created) and a JSON object containing a success message and the newly created user. This indicates that the user was successfully created in the database and provides the client with the details of the new user.
        res.status(201).json({
            message: "User created successfully",
            user: newUser
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            "message": "Internal Server Error"
        })
    }
})