import { Router } from "express";
import { userSignInController } from "../controller/index.js"

const userSignInRouter = Router();

// EndPoint for User SignIn : -http://localhost:5000/api/auth/user-sign-in
userSignInRouter.post("/user-sign-in", userSignInController);

export default userSignInRouter;