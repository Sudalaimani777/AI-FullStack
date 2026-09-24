import { Router } from "express";
import { orderController, getOrderedItemsController, getAllOrdersController, getOrdersByIdController, updateOrderStatusController } from "../../controllers/order/index.js";
import { protectMiddleWare, adminMiddleware } from "../../middlewares/auth/index.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { createOrderSchema } from "../../validators/order.validator.js";

const orderRouter = Router();

// API :- http://localhost:5000/api/order

orderRouter.post("/order", protectMiddleWare, validate(createOrderSchema), orderController);
orderRouter.get("/orders/myorders", protectMiddleWare, getOrderedItemsController);
orderRouter.get("/orders/allorders", protectMiddleWare, adminMiddleware, getAllOrdersController);

// Single order by ID route:
orderRouter.get("/orders/:id", protectMiddleWare, getOrdersByIdController);

// Update Order Status :- http://localhost:5000/api/orders/:id/status
orderRouter.patch("/orders/:id/status", protectMiddleWare, adminMiddleware, updateOrderStatusController)

export default orderRouter;