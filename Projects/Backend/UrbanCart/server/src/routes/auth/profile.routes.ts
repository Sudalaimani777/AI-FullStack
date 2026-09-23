import { Router } from "express";
import { protectMiddleWare } from "../../middlewares/auth/index.js";
import { profileController } from "../../controllers/auth/index.js"


const profileRouter = Router();


profileRouter.get("/profile", protectMiddleWare, profileController);

export default profileRouter;