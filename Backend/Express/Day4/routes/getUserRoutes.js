import express from "express";
import  {getUserDataController}  from "../controller/getUserDataController.js"

const getUserRoute = express.Router();

// API: http://localhost:5000/api/auth/user/get-user-data
getUserRoute.get("/get-user-data", getUserDataController);

export default getUserRoute;