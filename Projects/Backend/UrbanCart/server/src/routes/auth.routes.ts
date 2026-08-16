import { Router } from "express";
import authMiddleWare from "../middleware/auth.middleware.js";
import { authController } from "../controller/index.js"


const authRouter = Router();


authRouter.get("/profile", authMiddleWare, authController);

export default authRouter;