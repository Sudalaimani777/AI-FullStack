import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { addTaskRouter, getTaskRouter, updateTaskRouter, deleteTaskRouter } from "./routes/index.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();

// Task CRUD API :- http://localhost:5000/task
app.use("/task", addTaskRouter);
app.use("/task", getTaskRouter);
app.use("/task", updateTaskRouter);
app.use("/task", deleteTaskRouter);

app.listen(PORT, () => {
    console.log(`The port runs on local host ${PORT}`)
})