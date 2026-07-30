import { Router } from "express";
import { updateUserDataController } from "../controller/index.js"

const updateSingleUserDataRouter = Router();

// API EndPoint :- http://localhost:5000/api/users/update-user-data/:
updateSingleUserDataRouter.put("/update-user-data/:id", updateUserDataController);

export default updateSingleUserDataRouter;