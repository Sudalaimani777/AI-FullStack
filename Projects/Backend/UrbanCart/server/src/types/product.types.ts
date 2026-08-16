import { Document } from "mongoose";

export interface Product extends Document {
    product_id: string,
    product_name: string,
    product_category: string
}