import type { Request, Response } from "express";
import { AdminRepository } from "./admin.repository.js";
import { successResponse, errorResponse } from "../../utils/index.js";

export class AdminController {
    constructor(private adminRepository: AdminRepository = new AdminRepository()) { }

    getAllUser = async (_request: Request, response: Response): Promise<void> => {
        try {
            const users = await this.adminRepository.findAll();
            successResponse(response, "Fetched Users successfully", users, 200);
        } catch (error: any) {
            errorResponse(response, error.message || "Failed to retrieve users", 500);
        }
    }
}