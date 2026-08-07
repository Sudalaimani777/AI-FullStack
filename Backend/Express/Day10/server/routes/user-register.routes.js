import { Router } from "express";
import { userRegisterController } from "../controller/index.js"

const userRegisterRouter = Router();

userRegisterRouter.post("/auth/register", userRegisterController);

export default userRegisterRouter;