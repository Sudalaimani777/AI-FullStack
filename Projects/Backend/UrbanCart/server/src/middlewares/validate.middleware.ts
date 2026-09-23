import type { Request, Response, NextFunction } from "express";
import { type ZodType, ZodError } from "zod";

export const validate = (schema: ZodType) => {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            req.body = await schema.parseAsync(req.body);
            next();
        } catch (error) {
            if (error instanceof ZodError) {
                res.status(422).json({
                    message: "Validation Error",
                    errors: error.issues.map((err) => ({
                        field: err.path.join("."),
                        message: err.message
                    }))
                });
                return;
            }
            res.status(500).json({ message: "Internal Server Error" });
        }
    };
};