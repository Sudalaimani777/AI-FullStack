import { Router } from "express";
import { getStudentInfo } from "../controllers/get-student-data-controller.js";


const getStudentDataRouter = Router();

// End Point :- http://localhost:5000/api/student/get-student-info
getStudentDataRouter.get("/get-student-info", getStudentInfo);

export default getStudentDataRouter;