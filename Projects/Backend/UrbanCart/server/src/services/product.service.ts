import { Product_Model } from "../models/index.js";
import { ApiError } from "../utils/apiError.js";

export const getAllProductsService = async (filters?: { category?: string | undefined; search?: string | undefined }) => {
    const query: Record<string, any> = {};
    if (filters?.category && filters.category !== "All" && filters.category !== "All Disciplines") {
        query.product_category = { $regex: new RegExp(`^${filters.category}$`, "i") };
    }
    if (filters?.search && filters.search.trim()) {
        const searchTerm = filters.search.trim();
        query.$or = [
            { product_name: { $regex: searchTerm, $options: "i" } },
            { product_description: { $regex: searchTerm, $options: "i" } },
            { product_category: { $regex: searchTerm, $options: "i" } },
        ];
    }
    return await Product_Model.find(query).sort({ _id: -1 });
};

export const getSingleProductService = async (id: string) => {
    const product = await Product_Model.findById(id);
    if (!product) {
        throw new ApiError(404, "Product Not Found");
    }
    return product;
};

export const createProductService = async (productData: {
    product_name: string;
    product_price: string;
    product_category: string;
    product_description: string;
    product_image: string;
    product_stock: string;
}) => {
    return await Product_Model.create(productData);
};

export const updateProductService = async (
    id: string,
    updateData: {
        product_name?: string;
        product_description?: string;
        product_category?: string;
        product_image?: string;
        product_price?: string;
        product_stock?: string;
    }
) => {
    const updatedProduct = await Product_Model.findByIdAndUpdate(
        id,
        updateData,
        {
            new: true,
            runValidators: true
        }
    );

    if (!updatedProduct) {
        throw new ApiError(404, "Product Not Found To Update");
    }

    return updatedProduct;
};

export const deleteProductService = async (id: string) => {
    const deletedProduct = await Product_Model.findByIdAndDelete(id);
    if (!deletedProduct) {
        throw new ApiError(404, "Product Not Found to Delete");
    }
    return deletedProduct;
};