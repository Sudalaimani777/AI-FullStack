import http from "http";
import dotenv from "dotenv"
import path from "path";

dotenv.config();

const PORT = process.env.PORT || 5001;
const app = http.createServer((request, response) => {
    response.end("Hello node Day2")
})

app.listen(PORT, () => {    
    console.log(`The port is running on local host ${PORT}`)
})

// console.log(http);

// console.log(process);
// console.log(path)
// console.log()