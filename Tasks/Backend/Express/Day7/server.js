import express from "express";
import cors from "cors";
import { config } from "dotenv";
import connectDB from "./config/db.js";
import { loginRouter, registerRouter } from "./routes/index.js"

config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

connectDB();

// API for Auth :- http://localhost:5000/api/auth
app.use("/api/auth", registerRouter);
app.use("/api/auth", loginRouter);

app.listen(PORT, () => {
    console.log(`BR runs on LH ${PORT}`);
});