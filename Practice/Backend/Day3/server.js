import express from "express";

const app = express();

const PORT = 5000;

app.get("/", (request, response) => {
    response.send("Hello World");
})

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})