import { Router } from "express";
import { signUpController } from "../../controllers/auth/index.js"
import { validate } from "../../middlewares/validate.middleware.js";
import { signUpSchema } from "../../validators/auth.validator.js";

const signUpRouter = Router();


// API EndPoint for SignIn :- http://localhost:5000/api/auth/sign-up
signUpRouter.post("/sign-up", validate(signUpSchema), signUpController);

export default signUpRouter;