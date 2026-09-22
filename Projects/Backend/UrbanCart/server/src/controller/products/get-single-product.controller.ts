import type { Request, Response } from "express";
import Product_Model from "../../model/product.model.js";

// @desc Get Single Product
// @route GET /api/product/:id
const getSingleProductController = async (request: Request, response: Response): Promise<void> => {
    try {
        const { id } = request.params;
        const product = await Product_Model.findById(id);
        // Check if the single product doesn't exist
        if (!product) {
            response.status(404).json({ message: "Product Not Found" });
            return;
        }
        response.status(200).json({ message: "Product Fetched Successfully", product });
    } catch (err: any) {
        response.status(500).json({ message: "Something went wrong while fetching a product", err })
    }
}

export default getSingleProductController;