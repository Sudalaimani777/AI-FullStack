import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { userRegisterRouter, userLoginRouter } from "./routes/index.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

connectDB();

// API :- http://localhost:5000/api/auth/
app.use("/api/auth", userRegisterRouter);
app.use("/api/auth", userLoginRouter);

app.listen(PORT, () => {
    console.log(`The port runs on the localhost: ${PORT}`);
})