import { Router } from "express";
import { getTaskController } from "../controller/index.js"

const getTaskRouter = Router();

// EndPoint :- http://localhost:5000/api/crud/get-task
getTaskRouter.get("/get-task", getTaskController);

export default getTaskRouter;