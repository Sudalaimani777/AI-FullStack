import { Router } from "express";
import { getIndividualStudent } from "../controllers/get-individual-student-data-controller.js";


const getIndividualStudentRouter = Router();

// End Point :- http://localhost:5000/api/student/get-student-info
getIndividualStudentRouter.get("/get-student-info/:id", getIndividualStudent);

export default getIndividualStudentRouter;