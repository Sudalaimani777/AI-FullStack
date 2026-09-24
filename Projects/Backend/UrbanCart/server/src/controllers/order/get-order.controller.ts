import type { Request, Response } from "express";
import { getUserOrdersService } from "../../services/order.service.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

const getOrderedItemsController = asyncHandler(async (request: Request, response: Response): Promise<void> => {
    
    const orders = await getUserOrdersService(request.user._id);

    response.status(200).json({
        message: "Order fetched successfully",
        orders
    });
});

export default getOrderedItemsController;