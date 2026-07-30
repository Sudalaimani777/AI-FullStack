import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { sendUserDataRouter, getAllUserDataRouter, getSingleUserDataRouter, updateSingleUserDataRouter, deleteSingleUserDataRouter } from "./routes/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();

// API :- http://localhost:5000/api/users
app.use("/api/users", sendUserDataRouter);
app.use("/api/users", getAllUserDataRouter);
app.use("/api/users", getSingleUserDataRouter);
app.use("/api/users", updateSingleUserDataRouter);
app.use("/api/users", deleteSingleUserDataRouter);


app.listen(PORT, () => {
    console.log(`The port successfully runs on localhost ${PORT} `)
})