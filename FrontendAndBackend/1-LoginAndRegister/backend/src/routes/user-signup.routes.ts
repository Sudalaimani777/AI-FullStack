import { Router } from "express";
import { userSignUpController } from "../controller/index.js"

const userSignUpRouter = Router();

// EndPoint for User SignUp :- http://localhost:5000/api/auth/user-sign-up
userSignUpRouter.post("/user-sign-up", userSignUpController);

export default userSignUpRouter;