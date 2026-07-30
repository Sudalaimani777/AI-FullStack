import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import createStudentRouter from "./routes/create-student-routes.js";
import getStudentDataRouter from "./routes/get-student-data-routes.js";
import getIndividualStudentRouter from "./routes/get-individual-student-router.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

connectDB();

// API :- http://localhost:5000/api/student
app.use("/api/student", createStudentRouter);
app.use("/api/student", getStudentDataRouter);
app.use("/api/student", getIndividualStudentRouter)

app.listen(PORT, () => {
    console.log(`The app runs on the port ${PORT}`);
})