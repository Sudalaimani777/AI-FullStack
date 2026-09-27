import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/index.js";
import adminRoutes from "./modules/admin/admin.routes.js"
import authRoutes from "./modules/auth/auth.routes.js"
import userRoutes from "./modules/user/user.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";


dotenv.config();

connectDB();

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors())



app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);

app.use(errorHandler);


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})
