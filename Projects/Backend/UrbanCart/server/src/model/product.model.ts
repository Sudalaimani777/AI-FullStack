import { model } from "mongoose";
import ProductSchema from "../schema/product.schema.js"
import type { Product } from "../types/product.types.js"

const Product_Model = model<Product>("product-models", ProductSchema);

export default Product_Model;