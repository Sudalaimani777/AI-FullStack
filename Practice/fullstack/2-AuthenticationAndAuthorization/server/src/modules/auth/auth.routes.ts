import { Router } from "express";
import { AuthController } from "./auth.controller.js";
import { validate } from "../../middleware/validate.middleware.js";
import { registerSchema, loginSchema } from "./auth.schema.js";

const route = Router();
const authController = new AuthController();


route.post("/register", validate(registerSchema), authController.register);
route.post("/login", validate(loginSchema), authController.login)

export default route;