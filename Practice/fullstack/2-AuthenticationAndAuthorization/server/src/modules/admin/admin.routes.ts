import { Router } from "express";
import { AdminController } from "./admin.controller.js";
import { authenticate } from "../../middleware/auth.middleware.js";
import { authorizationRole } from "../../middleware/role.middleware.js";


const route = Router();
const adminController = new AdminController();


route.get("/users", authenticate, authorizationRole("admin"), adminController.getAllUser);


export default route;