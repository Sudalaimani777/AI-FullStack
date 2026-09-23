import { Document, Types } from "mongoose";

export interface OrderItem {
    product: Types.ObjectId;
    name: string;
    price: number;
    quantity: number;
}

export interface ShippingAddress {
    address: string;
    postal_code: string;
    city: string;
    country: string;
}

export type OrderStatus = "Pending" | "Processing" | "Shipped" | "Delivered";

export interface Order extends Document {
    user: Types.ObjectId;
    ordered_items: OrderItem[];
    total_price: number;
    order_status: OrderStatus;
    shipping_address: ShippingAddress;
    createdAt: Date;
    updatedAt: Date;
}