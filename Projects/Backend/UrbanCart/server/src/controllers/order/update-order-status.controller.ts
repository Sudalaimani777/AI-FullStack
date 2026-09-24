import type { Request, Response } from "express";
import { updateOrderStatusService } from "../../services/order.service.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import type { OrderStatus } from "../../types/order.types.js";


const validStatuses: OrderStatus[] = ["Pending", "Processing", "Shipped", "Delivered"]

const updateOrderStatusController = asyncHandler(async (request: Request, response: Response): Promise<void> => {
    const { id } = request.params;
    const { order_status } = request.body;

    if (!id || typeof id !== "string") {
        response.status(404).json({
            message: "Order ID is required"
        })
        return;
    }

    if (!order_status || validStatuses.includes(order_status)) {
        response.status(400).json({
            message: `Invalid order status. Allowed values: ${validStatuses.join(", ")}`
        });
        return;
    }

    const updateOrderStatus = updateOrderStatusService(id, order_status);

    if (!updateOrderStatus) {
        response.status(404).json({ message: "Order not found" });
        return;
    }

    // 5. Send updated order response
    response.status(200).json({
        message: "Order status updated successfully",
        order: updateOrderStatus
    });
})

export default updateOrderStatusController