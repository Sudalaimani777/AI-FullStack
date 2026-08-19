import { Router } from "express";
import { protectMiddleWare } from "../../middleware/auth/index.js";
import { profileController } from "../../controller/auth/index.js"


const profileRouter = Router();


profileRouter.get("/profile", protectMiddleWare, profileController);

export default profileRouter;