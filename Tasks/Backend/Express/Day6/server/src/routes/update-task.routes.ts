import { Router } from "express";
import { updateTaskController } from "../controller/index.js"

const updateTaskRouter = Router();

// End Point :- http://localhost:5000/task/update-task/123

updateTaskRouter.patch("/update-task/:id", updateTaskController);

export default updateTaskRouter;