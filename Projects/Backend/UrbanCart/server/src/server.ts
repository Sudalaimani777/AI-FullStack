import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/index.js"
import { signInRouter, signUpRouter } from "./routes/index.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

connectDB();

// Login API :- http://localhost:5000/api/auth
app.use("/api/auth", signInRouter);
app.use("/api/auth", signUpRouter);

app.listen(PORT, () => {
    console.log(`The BE runs on LH ${PORT}`)
})