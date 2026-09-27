import { z } from "zod";


export const registerSchema = z.object({
    userName: z.string().min(3, "Name must be at least 3 characters long"),
    userEmail: z.string().email("Invalid email address"),
    userPassword: z.string().min(7, "Password must be at least 7 characters long").max(10, "Password must be  10 characters long"),
    role: z.enum(["user", "admin"]).optional()
});

export const loginSchema = z.object({
    userEmail: z.string().email("Invalid email address"),
    userPassword: z.string().min(7, "Password must be at least 7 characters long").max(10, "Password must be  10 characters long"),
})