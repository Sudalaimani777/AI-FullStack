import type { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/apiError.js";

export const errorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal Server Error";

    // Handle invalid Mongoose ObjectId (e.g. GET /api/product/123invalid)
    if (err.name === "CastError") {
        statusCode = 400;
        message = `Invalid resource identifier: ${err.value}`;
    }

    // Handle Mongoose duplicate key error (code 11000)
    if (err.code === 11000) {
        statusCode = 409;
        message = "Duplicate field value entered";
    }

    res.status(statusCode).json({
        success: false,
        message,
        ...(process.env.NODE_ENV === "development" && { stack: err.stack })
    });
};