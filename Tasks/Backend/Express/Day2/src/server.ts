import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import welcomeRouter from "./routers/welcome.router.js";
import studentRouter from "./routers/student.router.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

// API:- http://localhost:5000/api
app.use("/api", welcomeRouter);
app.use("/api", studentRouter)

app.listen(PORT, () => {
    console.log(`The port successfully runs in the port number ${PORT}`)
})