import { Router } from "express";
import { addTaskController } from "../controller/index.js"

const addTaskRouter = Router();

// EndPoint  :-  http://localhost:5000/api/crud/add-task
addTaskRouter.post("/add-task", addTaskController);

export default addTaskRouter;