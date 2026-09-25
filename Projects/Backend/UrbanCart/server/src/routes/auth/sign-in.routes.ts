import { Router, type Request, type Response } from "express";
import { signInController, signOutController } from "../../controllers/auth/index.js"
import { validate } from "../../middlewares/validate.middleware.js";
import { signInSchema } from "../../validators/auth.validator.js";

const signInRouter = Router();

// API EndPoint for SignIn :- http://localhost:5000/api/auth/sign-in

signInRouter.post("/sign-in", validate(signInSchema), signInController);

// API EndPoint for Logout: POST /api/auth/signout
signInRouter.post("/signout", signOutController);

export default signInRouter;