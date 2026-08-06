import { Router } from "express";
import { updateTaskController } from "../controller/index.js"

const updateTaskRouter = Router();

// Endpoint :-  http://localhost:5000/api/crud/update-task
updateTaskRouter.put("/update-task/:id", updateTaskController);

export default updateTaskRouter;