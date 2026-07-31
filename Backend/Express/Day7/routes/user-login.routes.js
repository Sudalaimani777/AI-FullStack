import { Router } from "express";
import { userLoginController } from "../controller/index.js"

const userLoginRouter = Router();

// API EndPoint http://localhost:5000/api/auth/user-login
userLoginRouter.post("/user-login", userLoginController);

export default userLoginRouter;