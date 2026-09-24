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

export const getAllOrdersService = async () => {
    return await Order_Model.find({});
};

export const getOrderByIdService = async (orderId: string) => {
    return await Order_Model.findById(orderId)
}

// Update Order Status Controller (Admin) :-
export const updateOrderStatusService = async (orderId: string, orderStatus: OrderStatus) => {
    return await Order_Model.findByIdAndUpdate(
        orderId,
        { order_status: orderStatus },
        { new: true }
    )
}