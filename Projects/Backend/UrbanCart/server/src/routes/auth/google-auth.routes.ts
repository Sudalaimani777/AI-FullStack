import { Router } from "express";
import { googleAuthController } from "../../controllers/auth/index.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { googleAuthSchema } from "../../validators/auth.validator.js";

const googleAuthRouter = Router();

// API EndPoint: POST /api/auth/google
googleAuthRouter.post("/google", validate(googleAuthSchema), googleAuthController);

export default googleAuthRouter;