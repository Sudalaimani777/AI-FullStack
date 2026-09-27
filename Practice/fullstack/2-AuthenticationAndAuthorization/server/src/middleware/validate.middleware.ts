import type { Request, Response, NextFunction } from "express";
import type { ZodSchema } from "zod";
import { errorResponse } from "../utils/index.js"


// Validates req.body against a Zod schema before hitting the controller:-
export const validate = (schema: ZodSchema) => {
    return async (request: Request, response: Response, next: NextFunction): Promise<void> => {
        const result = schema.safeParse(request.body);

        if (!result.success) {
            const firstIssue = result.error.issues[0];
            const message = firstIssue ? `${firstIssue.path.join(".")}: ${firstIssue.message}` : "Validation failed";
            errorResponse(response, message, 422, result.error.format());
            return;
        }
        request.body = result.data;
        next();
    }
}