import type { Request, Response } from "express";
import { createOrderService } from "../../services/order.service.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

const orderController = asyncHandler(async (request: Request, response: Response): Promise<void> => {
    const createOrder = await createOrderService({
        userId: request.user._id,
        ...request.body
    });

    response.status(201).json({
        message: "Order Placed Successfully",
        createOrder
    });
});

export default orderController;