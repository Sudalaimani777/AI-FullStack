import { Router } from "express";
import {getProductsController, createProductController} from "../../controller/products/index.js"


const productRouter = Router();

// Same Endpoint :- http://localhost:5000/api/products

productRouter.route("/products")
    .get(getProductsController)
    .post(createProductController)

export default productRouter;