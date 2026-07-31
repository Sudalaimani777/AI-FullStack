import { Router } from "express";
import { signInController } from "../controller/index.js"

const signInRouter = Router();


// TODO: EndPoint :- http://localhost:5000/api/auth/sign-in
signInRouter.post("/sign-in", signInController);

export default signInRouter;