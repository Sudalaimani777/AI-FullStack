import express from "express";
import { authUserController } from "../controller/authUserController.js";

const authRoutes = express.Router();

// TODO: ENDPOINT http://localhost:5000/api/auth/user
authRoutes.post("/user", authUserController);

export default authRoutes;