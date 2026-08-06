import { Router } from "express";
import { deleteTaskController } from "../controller/index.js"

const deleteTaskRouter = Router();

// http://localhost:5000/api/crud/delete-task
deleteTaskRouter.delete("/delete-task/:id", deleteTaskController);

export default deleteTaskRouter;