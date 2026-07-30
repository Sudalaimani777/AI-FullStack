import { Router } from "express";
import { createStudentController } from "../controllers/create-student-data-controller.js";

const createStudentRouter = Router();

// END Point :- http://localhost:5000/api/student/create-student-info
createStudentRouter.post("/create-student-info", createStudentController);

export default createStudentRouter;