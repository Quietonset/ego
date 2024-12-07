import { z } from "zod";

export const signupValidationSchema = z.object({
    email: z.string().min(10, {message: 'Email must be 10-25 characters long!'}).max(25, {message: 'Email cannot exceed 25 characters!'}),
    password: z.string().min(8, 'Password must be 8-15 characters long!').max(15, 'Password cannot exceed 15 characters!'),
    confirmPassword: z.string().min(8, 'Password must be the same')
});