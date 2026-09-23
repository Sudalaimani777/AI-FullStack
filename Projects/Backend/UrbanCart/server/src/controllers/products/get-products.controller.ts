import type { Request, Response } from "express";
import { getAllProductsService } from "../../services/product.service.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

const getProductsController = asyncHandler(async (request: Request, response: Response): Promise<void> => {
    const allProducts = await getAllProductsService();

    response.status(200).json({
        message: "All Products Fetched Successfully",
        allProducts
    });
});

export default getProductsController;