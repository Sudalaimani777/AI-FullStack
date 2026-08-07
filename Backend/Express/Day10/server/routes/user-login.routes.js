import { Router } from "express";
import { userLoginController } from "../controller/index.js"

const userLoginRouter = Router();

userLoginRouter.post("/auth/login", userLoginController);

export default userLoginRouter;