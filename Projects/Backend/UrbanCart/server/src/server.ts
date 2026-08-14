import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

connectDB();

app.listen(PORT, () => {
    console.log(`The BE runs on LH ${PORT}`)
})