import { Router } from "express";
import { getSingleUserDataController } from "../controller/index.js";

const getSingleUserDataRouter = Router();

// API EndPoint :- http://localhost:5000/api/users/get-user-data/:
getSingleUserDataRouter.get("/get-user-data/:id", getSingleUserDataController);

export default getSingleUserDataRouter;
