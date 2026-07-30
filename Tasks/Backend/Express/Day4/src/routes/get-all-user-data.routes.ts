import { Router } from "express";
import { getAllUserDataController } from "../controller/index.js"

const getAllUserDataRouter = Router();

// End Point :- http://localhost:5000/api/users/get-all-user-data
getAllUserDataRouter.get("/get-all-user-data", getAllUserDataController);

export default getAllUserDataRouter;