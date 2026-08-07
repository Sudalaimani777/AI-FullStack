import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { userLoginRouter, userRegisterRouter } from "./routes/index.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api", userRegisterRouter);
app.use("/api", userLoginRouter);

app.listen(PORT, () => {
    console.log(`BE runs on Local Host ${PORT}`);
})