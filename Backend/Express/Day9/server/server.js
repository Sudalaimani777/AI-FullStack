import express from "express";
import cors from "cors";
import { config } from "dotenv";
import connectDB from "./config/db.js";
import { addTaskRouter, getTaskRouter, updateTaskRouter, deleteTaskRouter } from "./routes/index.js"

config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();

// API for CRUD :- http://localhost:5000/api/crud
app.use("/api/crud", addTaskRouter);
app.use("/api/crud", getTaskRouter);
app.use("/api/crud", updateTaskRouter);
app.use("/api/crud", deleteTaskRouter);


app.listen(PORT, () => {
    console.log(`BE runs on LH ${PORT}`);
})