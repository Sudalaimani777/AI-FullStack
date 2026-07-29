import { Router } from "express";
import { welcomeController } from "../controllers/welcome.controller.js";

const welcomeRouter = Router();

// End Point -> http://localhost:5000/api/greet
welcomeRouter.post("/greet", welcomeController);

export default welcomeRouter;