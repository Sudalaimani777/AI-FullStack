import type { Request, Response } from "express";
import Product_Model from "../../model/product.model.js";

// @desc Update Single Product (Admin Only)
// @route PUT /api/product/:id
const updateProductController = async (request: Request, response: Response): Promise<void> => {
    try {
        const { id } = request.params;
        const { product_name, product_description, product_category, product_image, product_price, product_stock } = request.body;

        const product = await Product_Model.findById(id);

        if (!product) {
            response.status(404).json({
                message: "Product Not Found To Update",
            })
            return;
        }

        const updatedProduct = await Product_Model.findByIdAndUpdate(
            id,
            {
                product_name,
                product_description,
                product_category,
                product_image,
                product_price,
                product_stock
            },
            {
                new: true, // Returns the newly updated document instead of the old one
                runValidators: true // Ensures the updates follow your Mongoose schema validation rules
            }
        )

        response.status(200).json({
            message: "Product Updated Successfully",
            updatedProduct
        });
    } catch (err: any) {
        response.status(500).json({
            message: "Something went wrong while updating the product",
            error: err.message
        });
    }
}

export default updateProductController;

