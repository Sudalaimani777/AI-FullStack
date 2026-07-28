import express from "express";
import { authRegister } from "../controllers/authRegister.js";

const routes = express.Router();

// End Point -> https://localhost:5000/api/auth/user/register
routes.post("/register", authRegister)

export default routes