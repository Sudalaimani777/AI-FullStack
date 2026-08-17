import { Router } from "express";
import { signUpController } from "../../controller/auth/index.js"

const signUpRouter = Router();


// API EndPoint for SignIn :- http://localhost:5000/api/auth/sign-up
signUpRouter.post("/sign-up", signUpController);

export default signUpRouter;