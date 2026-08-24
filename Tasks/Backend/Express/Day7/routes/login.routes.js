import { Router } from "express";
import { loginController } from "../controller/index.js"

const loginRouter = Router();

loginRouter.post("/login", loginController);

export default loginRouter