import { Router } from "express";
import { sendUserDataController } from "../controller/index.js";

const sendUserDataRouter = Router();

// End Point :- http://localhost:5000/api/users/send-user-data
sendUserDataRouter.post("/send-user-data", sendUserDataController);

export default sendUserDataRouter;