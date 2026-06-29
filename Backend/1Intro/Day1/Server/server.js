// const express = require("express"); //This is the commonjs syntax for importing express module. We can also use the ES6 syntax if we set "type": "module" in package.json file. But here we are using the commonjs syntax for importing express module.

import express from "express"; //This is the ES6 syntax for importing express module. We can also use the commonjs syntax if we set "type": "commonjs" in package.json file. Because we have set "type": "module" in package.json file, we can use the ES6 syntax for importing express module fro the same context as the client side.

// The app holds the express module and we can use it to create our server and handle requests and responses.
const app = express();

// The PORT variable holds the port number on which our server will run. We can change it to any port number we want, but here we are using 5000 as it is a common port number for development servers.
const PORT = 5000;

// The app.get() method is used to handle GET requests to the root URL ("/"). When a GET request is made to the root URL, the callback function is executed, which sends a response back to the client with the message "This server is running...".
app.get("/", (request, response) => {
    response.send("This server is running...")
})

// The app.listen() method is used to start the server and listen for incoming requests on the specified port. The callback function is executed once the server starts successfully, and it logs a message to the console indicating that the server is running and on which port it is listening.
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})

app.get("/api", (request, response) => {
    response.send("This is the API endpoint...");
})