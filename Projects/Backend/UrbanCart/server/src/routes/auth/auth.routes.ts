import { Router } from "express";
import authMiddleWare from "../../middleware/auth/auth.middleware.js";
import { authController } from "../../controller/auth/index.js"


const authRouter = Router();


authRouter.get("/profile", authMiddleWare, authController);

export default authRouter;