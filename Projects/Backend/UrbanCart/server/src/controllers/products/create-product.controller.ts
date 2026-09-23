import type { Request, Response } from "express";
import { createProductService } from "../../services/product.service.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

const createProductController = asyncHandler(async (request: Request, response: Response): Promise<void> => {
    const createdProduct = await createProductService(request.body);

    response.status(201).json({
        message: "Product Created Successfully",
        createdProduct
    });
});

export default createProductController;