import type { Request, Response } from "express";
import { updateProductService } from "../../services/product.service.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

const updateProductController = asyncHandler(async (request: Request, response: Response): Promise<void> => {
    const updatedProduct = await updateProductService(request.params.id as string, request.body);

    response.status(200).json({
        message: "Product Updated Successfully",
        updatedProduct
    });
});

export default updateProductController;