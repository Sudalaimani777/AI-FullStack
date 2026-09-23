import { Router } from "express";
import { orderController, getOrderedItemsController, getAllOrdersController } from "../../controllers/order/index.js";
import { protectMiddleWare, adminMiddleware } from "../../middlewares/auth/index.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { createOrderSchema } from "../../validators/order.validator.js";

const orderRouter = Router();

orderRouter.post("/order", protectMiddleWare, validate(createOrderSchema), orderController);
orderRouter.get("/orders/myorders", protectMiddleWare, getOrderedItemsController);
orderRouter.get("/orders/allorders", protectMiddleWare, adminMiddleware, getAllOrdersController);

export default orderRouter;