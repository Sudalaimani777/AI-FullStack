import { z } from "zod";

export const createOrderSchema = z.object({
    ordered_items: z.array(
        z.object({
            product: z.string().min(1, "Product ID is required"),
            name: z.string().min(1, "Product name is required"),
            price: z.number().positive("Price must be greater than 0"),
            quantity: z.number().int().positive("Quantity must be at least 1")
        })
    ).min(1, "Order must contain at least 1 item"),
    total_price: z.number().positive("Total price must be positive"),
    shipping_address: z.object({
        address: z.string().min(1, "Address is required"),
        postal_code: z.string().min(1, "Postal code is required"),
        city: z.string().min(1, "City is required"),
        country: z.string().min(1, "Country is required")
    })
});