import type { Request, Response, NextFunction } from "express";
import { errorResponse } from "../utils/index.js";

// Authorization: Ensures the authenticated user has the necessary role (e.g. admin) :-
export const authorizationRole = (...allowedRoles: string[]) => {
    return (request: Request, response: Response, next: NextFunction): void => {
        const user = (request as any).user;

        if (!user) {
            errorResponse(response, "Unauthorized: Authentication required.", 401);
            return;
        }

        if (!allowedRoles.includes(user.role)) {
            errorResponse(response, "Forbidden: You do not have permission to access this resource.", 403);
            return;
        }

        next();
    }
}