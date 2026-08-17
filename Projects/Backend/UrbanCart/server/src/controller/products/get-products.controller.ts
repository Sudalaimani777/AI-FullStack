import { Product_Model } from "../../model/index.js";
import type { Request, Response } from "express";

// @desc Get All Products
// @route GET /api/products

const getProductsController = async (request: Request, response: Response): Promise<void> => {
    try {
        const allProducts = await Product_Model.find();

        if (!allProducts) {
            response.status(404).json({
                message: "No Product Found"
            });
            return;
        }

        response.status(200).json({
            message: "All Products Fetched Successfully",
            allProducts
        })

    } catch (error: any) {
        response.status(500).json({
            message: `Something went wrong while fetching the products ${error.message}`
        })
    }
}

export default getProductsController;