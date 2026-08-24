import { Router } from "express";
import { registerController } from "../controller/index.js"

const registerRouter = Router();

registerRouter.post("/register", registerController);

export default registerRouter