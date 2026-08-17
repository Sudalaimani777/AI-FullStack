import { Schema } from "mongoose";
import type { Product } from "../types/product.types.js";

const ProductSchema = new Schema<Product>({
    product_name: {
        type: String,
        required: true
    },
    product_description: {
        type: String,
        required: true
    },
    product_category: {
        type: String,
        required: true
    },
    product_image: {
        type: String,
        required: true
    },
    product_price: {
        type: String,
        required: true
    },
    product_stock: {
        type: String,
        required: true,
    }
});

export default ProductSchema;