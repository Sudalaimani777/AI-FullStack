import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import addRouter from "./routes/add-data.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.MONGO_URL || 5000;

app.use(cors());
app.use(express.json());

connectDB();

app.use("/task", addRouter);

app.listen(PORT, () => {
    console.log(`PORT runs on ${PORT}`)
});