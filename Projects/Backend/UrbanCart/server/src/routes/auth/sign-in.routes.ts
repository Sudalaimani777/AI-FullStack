import { Router } from "express";
import { signInController } from "../../controllers/auth/index.js"
import { validate } from "../../middlewares/validate.middleware.js";
import { signInSchema } from "../../validators/auth.validator.js";

const signInRouter = Router();

// API EndPoint for SignIn :- http://localhost:5000/api/auth/sign-in

signInRouter.post("/sign-in",validate(signInSchema), signInController);

export default signInRouter;