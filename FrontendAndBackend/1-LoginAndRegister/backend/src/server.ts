import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import { userSignUpRouter, userSignInRouter } from "./routes/index.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

connectDB();

// API for SignUp/SignIn:- http://localhost:5000/api/auth
app.use("/api/auth", userSignUpRouter);
app.use("/api/auth", userSignInRouter);

app.listen(PORT, () => {
    console.log(`The port run on ${PORT}`);
})