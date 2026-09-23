import type { Request, Response } from "express";
import { getAllOrdersService } from "../../services/order.service.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

const getAllOrdersController = asyncHandler(async (request: Request, response: Response): Promise<void> => {
    const orders = await getAllOrdersService();

    response.status(200).json({
        message: "All orders from the users fetched successfully",
        orders
    });
});

export default getAllOrdersController;