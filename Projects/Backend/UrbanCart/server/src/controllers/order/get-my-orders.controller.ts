import type { Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { getOrderByIdService } from "../../services/order.service.js";


const getOrdersByIdController = asyncHandler(async (request: Request, response: Response): Promise<void> => {
    const { id } = request.params;

    if (!id || typeof id !== "string") {
        response.status(400).json({ message: "Order ID is required" });
        return;
    }
    const orders = await getOrderByIdService(id);

    if (!orders) {
        response.status(404).json({ message: "Order not found" });
        return;
    }

    const orderUserId = (orders.user as any)?._id
        ? (orders.user as any)._id.toString()
        : orders.user.toString();
    const isOwner = orderUserId === request.user?._id?.toString();
    const isAdmin = Boolean(request.user?.is_admin);

    if (!isOwner && !isAdmin) {
        response.status(403).json({
            message: "Access Denied"
        });
        return;
    }

    response.status(200).json({
        message: "Order fetched successfully",
        orders
    })
});

export default getOrdersByIdController;