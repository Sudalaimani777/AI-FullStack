import { Router } from "express";
import profileMiddleWare from "../../middleware/auth/profile.middleware.js";
import { profileController } from "../../controller/auth/index.js"


const profileRouter = Router();


profileRouter.get("/profile", profileMiddleWare, profileController);

export default profileRouter;