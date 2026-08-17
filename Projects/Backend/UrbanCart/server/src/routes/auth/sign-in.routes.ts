import { Router } from "express";
import { signInController } from "../../controller/auth/index.js"

const signInRouter = Router();

// API EndPoint for SignIn :- http://localhost:5000/api/auth/sign-in

signInRouter.post("/sign-in", signInController);

export default signInRouter;