import { Router } from "express";
import { UserController } from "./user.controller.js";
import { authenticate } from "../../middleware/auth.middleware.js";

const router = Router();
const userController = new UserController();

router.get("/profile", authenticate, userController.getProfile);

export default router;