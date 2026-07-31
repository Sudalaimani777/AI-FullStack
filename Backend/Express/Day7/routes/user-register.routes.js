import { Router } from "express";
import {userRegisterController} from "../controller/index.js"

const userRegisterRouter = Router();

// API End Point :- http://localhost:5000/api/auth/user-register
userRegisterRouter.post("/user-register", userRegisterController);

export default userRegisterRouter;