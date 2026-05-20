// const express = require("express"); // This is the CommonJS syntax for importing the Express module
import express from "express"; // This is the ES6 module syntax for importing the Express module

// Create an instance of the Express application :-
const app = express();

// Define the port number on which the server will listen :-
const PORT = 5000;

// console.log(app); // This will print the Express application object to the console

// Start the server and listen on the specified port :-
app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

