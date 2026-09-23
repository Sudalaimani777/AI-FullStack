import { Router } from "express";
import { 
    getProductsController, 
    createProductController, 
    getSingleProductController, 
    deleteProductController, 
    updateProductController 
} from "../../controllers/products/index.js";
import { protectMiddleWare, adminMiddleware } from "../../middlewares/auth/index.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { createProductSchema, updateProductSchema } from "../../validators/product.validator.js";

const productRouter = Router();

productRouter.route("/products")
    .get(getProductsController)
    .post(protectMiddleWare, adminMiddleware, validate(createProductSchema), createProductController);

productRouter.route("/product/:id")
    .get(getSingleProductController)
    .put(protectMiddleWare, adminMiddleware, validate(updateProductSchema), updateProductController)
    .delete(protectMiddleWare, adminMiddleware, deleteProductController);

export default productRouter;