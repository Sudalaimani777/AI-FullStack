// server/src/services/order.service.ts
import { Order_Model, Product_Model } from "../models/index.js";
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

    const savedOrder = await order.save();

    // Deduct stock for each ordered piece in the inventory catalog
    if (Array.isArray(orderData.ordered_items)) {
        for (const item of orderData.ordered_items) {
            if (item.product && item.quantity) {
                try {
                    const product = await Product_Model.findById(item.product);
                    if (product) {
                        const currentStock = Math.max(
                            0,
                            parseInt(product.product_stock || "0", 10) - Number(item.quantity)
                        );
                        product.product_stock = String(currentStock);
                        await product.save();
                    }
                } catch (stockError) {
                    console.error(`Failed to deduct inventory for product ${item.product}:`, stockError);
                }
            }
        }
    }

    return savedOrder;
};

export const getUserOrdersService = async (userId: string) => {
    return await Order_Model.find({ user: userId })
        .populate("ordered_items.product", "product_name product_price product_image product_category product_stock")
        .sort({ createdAt: -1 });
};

// Populate customer profile + item products so admin and patrons see rich manifests
export const getAllOrdersService = async () => {
    return await Order_Model.find({})
        .populate("user", "user_name user_email")
        .populate("ordered_items.product", "product_name product_price product_image product_category product_stock")
        .sort({ createdAt: -1 }); // Newest orders first
};

export const getOrderByIdService = async (orderId: string) => {
    return await Order_Model.findById(orderId)
        .populate("user", "user_name user_email")
        .populate("ordered_items.product", "product_name product_price product_image product_category product_stock");
};

// Update Order Status Controller (Admin)
export const updateOrderStatusService = async (orderId: string, orderStatus: OrderStatus) => {
    return await Order_Model.findByIdAndUpdate(
        orderId,
        { order_status: orderStatus },
        { new: true }
    );
};