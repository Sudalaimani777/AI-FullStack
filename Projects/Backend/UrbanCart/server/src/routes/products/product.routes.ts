import { Router } from "express";
import { getProductsController, createProductController } from "../../controller/products/index.js"
import { protectMiddleWare, adminMiddleware } from "../../middleware/auth/index.js"

const productRouter = Router();

// Same Endpoint :- http://localhost:5000/api/auth/products

productRouter.route("/products")
    .get(getProductsController)
    .post(protectMiddleWare, adminMiddleware, createProductController)

export default productRouter;