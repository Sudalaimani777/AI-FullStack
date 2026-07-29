import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import getUserRoute from "./routes/getUserRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Port runs in ${PORT}`);
})

// TODO: http://localhost:5000/api/auth
// TODO: http://localhost:5000/api/auth
app.use("/api/auth", authRoutes);
app.use("/api/auth/user", getUserRoute);