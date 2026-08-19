import type { Request, Response, NextFunction } from "express";


const adminMiddleware = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    try {
        const { user } = request;

        if (user && user.is_admin) {
            next();
            return;
        } else {
            response.status(409).json({
                message: "Not a authorized user to create a product"
            })
            return;
        }
    } catch (err: any) {
        response.status(500).json({
            message: "Not a authorized user to create a product",
            err
        })
    }
}

export default adminMiddleware;