import { Router } from "express";
import { protectMiddleWare } from "../../middlewares/auth/index.js";
import { profileController } from "../../controllers/auth/index.js"


const profileRouter = Router();

http://localhost:5000/api/auth/profile

profileRouter.get("/profile", protectMiddleWare, profileController);

export default profileRouter;