import type { Request, Response } from "express";
import { getSingleProductService } from "../../services/product.service.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

const getSingleProductController = asyncHandler(async (request: Request, response: Response): Promise<void> => {
    const product = await getSingleProductService(request.params.id as string);

    response.status(200).json({
        message: "Product Fetched Successfully",
        product
    });
});

export default getSingleProductController;