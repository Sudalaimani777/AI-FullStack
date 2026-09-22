import type { Request, Response } from "express";
import ProductSchema from "../../schema/product.schema.js";
import Product_Model from "../../model/product.model.js";

// @desc Delete Single Product (Admin Only)
// @route DELETE /api/product/:id
const deleteProductController = async (request: Request, response: Response): Promise<void> => {
    try {
        const { id } = request.params;

        // Delete the document in a single database call
        const deletedProduct = await Product_Model.findByIdAndDelete(id);

        if (!deletedProduct) {
            response.status(404).json({ 
                message: "Product Not Found to Delete" 
            });
            return;
        }

        response.status(200).json({
            message: "Product Deleted Successfully",
            deletedProduct
        })

    } catch (err: any) {
        response.status(500).json({
            message: "Something went wrong while deleting the product",
            error: err.message
        })
    }
}

export default deleteProductController;