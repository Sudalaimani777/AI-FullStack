import { Document } from "mongoose";

export interface Product extends Document {
    product_name: string,
    product_price: string,
    product_category: string,
    product_description:string,
    product_image:string,
    product_stock:string
}