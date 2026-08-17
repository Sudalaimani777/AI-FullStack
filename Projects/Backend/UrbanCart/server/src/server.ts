import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/index.js"
import { signInRouter, signUpRouter, authRouter } from "./routes/auth/index.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

connectDB();

//@API Login API :- http://localhost:5000/api/auth
app.use("/api/auth", signInRouter);
app.use("/api/auth", signUpRouter);

//@API Profile API :- http://localhost:5000/api
app.use("/api", authRouter);

app.listen(PORT, () => {
    console.log(`The BE runs on LH ${PORT}`)
})