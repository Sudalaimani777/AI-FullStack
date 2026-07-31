import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { signUpRouter, signInRouter } from "./routes/index.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

connectDB();

// TODO: API :- http://localhost:5000/api/auth
app.use("/api/auth", signUpRouter);
app.use("/api/auth", signInRouter);


app.listen(PORT, () => {
    console.log(`The BE runs in the port ${PORT}`);
})