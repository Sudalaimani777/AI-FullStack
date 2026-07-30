import { Router } from "express";
import { deleteUserDataController } from "../controller/index.js";

const deleteSingleUserDataRouter = Router();

// API EndPoint :- http://localhost:5000/api/users/delete-user-data/:id
deleteSingleUserDataRouter.delete("/delete-user-data/:id", deleteUserDataController);

export default deleteSingleUserDataRouter;