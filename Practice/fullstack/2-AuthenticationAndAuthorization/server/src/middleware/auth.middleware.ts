import type { Request, Response, NextFunction } from "express";
import { verifyJWT, type JWTSignPayload, errorResponse } from "../utils/index.js"

// Checks the Authorization: Bearer <token> header, verifies the JWT, and attaches req.user :-
export const authenticate = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        errorResponse(response, "Access denied. No token provided", 401);
        return;
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        errorResponse(response, "Access denied. Token missing.", 401);
        return;
    }

    try {
        const decoded: JWTSignPayload = verifyJWT(token);
        (request as any).user = decoded;
        next();
    } catch (error: any) {
        errorResponse(response, "Invalid or expired token.", 401)
    }
}