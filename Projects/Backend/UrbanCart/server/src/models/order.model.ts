import { model } from "mongoose";
import mongoose, { Schema } from "mongoose";
import type { Order } from "../types/order.types.js";


const OrderSchema = new Schema<Order>({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserInfoModel",
        required: true
    },
    ordered_items: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product_Model",
                required: true
            },
            name: String,
            price: Number,
            quantity: Number
        }
    ],
    // Total Price :-
    total_price: {
        type: Number,
        required: true
    },
    // Order Status :-
    order_status: {
        type: String,
        enum: ["Pending", "Processing", "Shipped", "Delivered"],
        default: "Pending"
    },
    // Shipping Address :-
    shipping_address: {
        address: String,
        postal_code: String,
        city: String,
        country: String
    }
}, { timestamps: true })



const Order_Model = model<Order>("order", OrderSchema);

export default Order_Model;