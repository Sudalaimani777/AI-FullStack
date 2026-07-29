import { Router } from "express";
import { createUser } from "../controllers/createUserController.js";

const createUserRoute = Router();

// TODO: API Endpoint -> http://localhost:5000/api/user/send-user
createUserRoute.post("/send-user", createUser);

export default createUserRoute;