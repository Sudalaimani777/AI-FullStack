import { Router } from "express";
import { getUser } from "../controllers/getUserController.js";

const getUserRoute = Router();

// TODO: EndPoint -> http://localhost:5000/api/user/get-user
getUserRoute.get("/get-user", getUser);

export default getUserRoute;