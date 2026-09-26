import type { Request, Response } from "express";
import { getAllProductsService } from "../../services/product.service.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

const getProductsController = asyncHandler(async (request: Request, response: Response): Promise<void> => {
    const { category, search } = request.query;
    const filters: { category?: string | undefined; search?: string | undefined } = {};

    if (typeof category === "string") {
        filters.category = category;
    }
    if (typeof search === "string") {
        filters.search = search;
    }

    const allProducts = await getAllProductsService(filters);

    response.status(200).json({
        message: "All Products Fetched Successfully",
        allProducts
    });
});

export default getProductsController;