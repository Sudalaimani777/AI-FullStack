import { Product_Model } from "../../model/index.js";
import type { Request, Response } from "express";

// @desc Create Individual Product :- (Admin Only)
// @route POST /api/products

const createProductController = async (request: Request, response: Response): Promise<void> => {
    try {

        const { product_name, product_price, product_category, product_description, product_image, product_stock } = request.body;

        const validateProductData = !product_name || !product_price || !product_category || !product_description || !product_image || !product_stock;

        if (validateProductData) {
            response.status(409).json({
                message: "Enter the required fields to add products"
            });
            return;
        }

        const createdProduct = await Product_Model.create({
            product_name,
            product_price,
            product_category,
            product_description,
            product_image,
            product_stock
        });

        response.status(201).json({
            message: "Product Created Successfully",
            createdProduct
        })

    } catch (error: any) {
        response.status(500).json({
            message: "Something went wrong while creating a product"
        })
    }
}

export default createProductController;