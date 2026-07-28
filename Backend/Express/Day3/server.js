import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.listen(PORT, () => {
    console.log(`Successfully runs in the port ${PORT}`)
})

// With API -> https://localhost:5000/api/auth/user
app.use("/api/auth", routes)