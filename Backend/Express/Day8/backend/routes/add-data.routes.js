import { Router } from "express";
import addController from "../controller/add-data.controller.js";

const addRouter = Router();

//End Point :- http://localhost:5000/task/add-data
addRouter.post("/add-data", addController);

export default addRouter;