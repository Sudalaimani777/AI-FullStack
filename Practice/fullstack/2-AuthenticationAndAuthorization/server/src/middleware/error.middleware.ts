import type { Request, Response, NextFunction } from "express";
import { errorResponse } from "../utils/index.js";

// Global error catcher for unhandled exceptions:
export const errorHandler = (err: any, _request: Request, response: Response, _next: NextFunction): void => {
    console.error("Unhandled Error:", err);
    const status = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    errorResponse(response, message, status);
}