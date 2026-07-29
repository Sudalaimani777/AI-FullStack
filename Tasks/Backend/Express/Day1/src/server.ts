import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import createUserRoute from "./routes/createUserRoute.js";
import getUserRoute from "./routes/getUserRoute.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// TODO: API -> http://localhost:5000/api/user
app.use("/api/user", createUserRoute);
app.use("/api/user", getUserRoute);

app.listen(PORT, () => {
    console.log(`The port is running successfully on localhost ${PORT}`)
})

