import { Router } from "express";
import { getProductsController, createProductController, getSingleProductController, deleteProductController, updateProductController } from "../../controller/products/index.js"
import { protectMiddleWare, adminMiddleware } from "../../middleware/auth/index.js"

const productRouter = Router();

// Endpoint :- http://localhost:5000/api/products

productRouter.route("/products")
    .get(getProductsController)
    .post(protectMiddleWare, adminMiddleware, createProductController)

// Endpoint :- http://localhost:5000/api/product

productRouter.route("/product/:id")
    .get(getSingleProductController)
    .put(protectMiddleWare, adminMiddleware, updateProductController)
    .delete(protectMiddleWare, adminMiddleware, deleteProductController)

export default productRouter;