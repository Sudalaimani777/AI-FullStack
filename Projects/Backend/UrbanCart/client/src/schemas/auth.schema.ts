import { z } from 'zod';

export const signUpSchema = z.object({
  user_name: z.string().trim().min(3, 'Username must be at least 3 characters'),
  user_email: z.string().trim().email('Invalid email address'),
  user_password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const signInSchema = z.object({
  user_email: z.string().trim().email('Invalid email address'),
  user_password: z.string().min(1, 'Password is required'),
});

export type SignUpFormValues = z.infer<typeof signUpSchema>;
export type SignInFormValues = z.infer<typeof signInSchema>;
