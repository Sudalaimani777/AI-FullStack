import type { Request, Response } from "express";
import { deleteProductService } from "../../services/product.service.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

const deleteProductController = asyncHandler(async (request: Request, response: Response): Promise<void> => {
    const deletedProduct = await deleteProductService(request.params.id as string);

    response.status(200).json({
        message: "Product Deleted Successfully",
        deletedProduct
    });
});

export default deleteProductController;