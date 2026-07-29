import { z } from "zod";

export const userSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.email("Invalid email")
})

export type user = z.infer<typeof userSchema>;