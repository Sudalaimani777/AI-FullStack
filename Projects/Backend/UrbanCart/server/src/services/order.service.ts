// server/src/services/order.service.ts
import { Order_Model } from "../models/index.js";
import type { OrderStatus } from "../types/order.types.js";

export const createOrderService = async (orderData: {
    userId: string;
    ordered_items: any[];
    total_price: number;
    shipping_address: any;
}) => {
    const order = new Order_Model({
        user: orderData.userId,
        ordered_items: orderData.ordered_items,
        total_price: orderData.total_price,
        shipping_address: orderData.shipping_address
    });

    return await order.save();
};

export const getUserOrdersService = async (userId: string) => {
    return await Order_Model.find({ user: userId });
};

// Updated: Populate customer name and email so admin can see who placed the order
export const getAllOrdersService = async () => {
    return await Order_Model.find({})
        .populate("user", "user_name user_email")
        .sort({ createdAt: -1 }); // Newest orders first
};

export const getOrderByIdService = async (orderId: string) => {
    return await Order_Model.findById(orderId)
        .populate("user", "user_name user_email");
};

// Update Order Status Controller (Admin)
export const updateOrderStatusService = async (orderId: string, orderStatus: OrderStatus) => {
    return await Order_Model.findByIdAndUpdate(
        orderId,
        { order_status: orderStatus },
        { new: true }
    );
};