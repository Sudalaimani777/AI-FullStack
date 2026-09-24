import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/index.js";
import { signInRouter, signUpRouter, profileRouter, googleAuthRouter } from "./routes/auth/index.js";
import productRouter from "./routes/products/product.routes.js";
import orderRouter from "./routes/order/order.routes.js";
import type { Request, Response } from "express";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

connectDB();

//@ Auth Routes API Login API :- http://localhost:5000/api/auth
app.use("/api/auth", signUpRouter);
app.use("/api/auth", signInRouter);

// @Google Auth Route :- http://localhost:5000/api/auth
app.use("/api/auth", googleAuthRouter);

//@Auth Profile API :- http://localhost:5000/api
app.use("/api/auth", profileRouter);

// @API Product :- http://localhost:5000/api/products
app.use("/api", productRouter);

// @API Order :- http://localhost:5000/api/orders
app.use("/api", orderRouter);

app.use((request: Request, response: Response) => {
    response.status(404).json({
        message: `Route ${request.originalUrl} not found`
    })
});

// Global Error Handler :-
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`The BE runs on LH ${PORT}`)
})


