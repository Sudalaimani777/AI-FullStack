import { Router } from "express";
import { getStudentDetails } from "../controllers/student.controller.js";

const studentRouter = Router();

// API EndPoint :- http://localhost:5000/api/student
studentRouter.post("/student", getStudentDetails);

export default studentRouter;