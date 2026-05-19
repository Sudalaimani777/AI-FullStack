import express from "espress";

const app = express();
const PORT = 3000;

app.get("/", (request, response) => {
    response.send("Hello World");
})

app.listen(PORT,() => {
    console.log("This is my first backend")
})