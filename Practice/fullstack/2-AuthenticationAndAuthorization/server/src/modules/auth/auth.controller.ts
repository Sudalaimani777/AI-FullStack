import type { Request, Response } from "express";
import { AuthService } from "./auth.service.js";
import { successResponse, errorResponse } from "../../utils/response.js";

export class AuthController {
    constructor(private authService: AuthService = new AuthService()) { }


    register = async (request: Request, response: Response): Promise<void> => {
        try {
            const data = request.body
            const result = await this.authService.register(data);
            successResponse(response, "User registered successfully", result, 201)
        } catch (error: any) {
            errorResponse(response, error.message || "Registration failed", 400)
        }
    }

    login = async (request: Request, response: Response): Promise<void> => {
        try {
            const data = request.body;
            const result = await this.authService.login(data);
            successResponse(response, "User logged in successfully", result, 200)
        } catch (error: any) {
            errorResponse(response, error.message || "Login Failed", 400);
        }
    }

}