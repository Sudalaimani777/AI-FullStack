import { Router } from "express";
import { addTaskController } from "../controller/index.js";

const addTaskRouter = Router();

// End Point :- http://localhost:5000/task/add-task

addTaskRouter.post("/add-task", addTaskController);

export default addTaskRouter;