import { Router} from "express";
import {deleteTaskController} from "../controller/index.js"

const deleteTaskRouter = Router();

// End Point :- http://localhost:5000/task/delete-task/123
deleteTaskRouter.delete("/delete-task/:id", deleteTaskController);

export default deleteTaskRouter;