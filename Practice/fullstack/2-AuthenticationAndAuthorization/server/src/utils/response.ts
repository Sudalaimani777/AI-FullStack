import type { Response } from "express";


// Standardized helper for sending uniform JSON responses across all controllers:-

// Success Response :-
export const successResponse = <T>(response: Response, message: string, data?: T, statusCode = 200): Response => {
    return response.status(statusCode).json({
        success: true,
        message,
        ...(data !== undefined ? { data } : {})
    })
}

// Error Response :-
export const errorResponse = <T>(response: Response, message: string, statusCode = 400, error?: unknown): Response => {
    return response.status(statusCode).json({
        success: false,
        message,
        ...(error !== undefined ? { error } : {})
    })
}