import { Router } from "express";
import { signUpController } from "../controller/index.js";

const signUpRouter = Router();

// TODO: EndPoint :- http://localhost:5000/api/auth/sign-up
signUpRouter.post("/sign-up", signUpController);

export default signUpRouter;