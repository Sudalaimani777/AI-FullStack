import { Router } from "express";
import { getTaskController } from "../controller/index.js"

const getTaskRouter = Router();

// End Point :- http://localhost:5000/task/get-task

getTaskRouter.get("/get-task", getTaskController);

export default getTaskRouter;