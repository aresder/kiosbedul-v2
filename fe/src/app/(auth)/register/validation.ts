import { z } from "zod";

export const registerSchema = z.object({
  full_name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(2, { message: "Name must be at least 2 characters long" }),

  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email({ message: "Invalid email address" })
    .trim(),

  phone_number: z
    .string({
      required_error: "Phone number is required",
      invalid_type_error: "Phone number must be a string",
    })
    .min(9, { message: "Phone number must be at least 9 characters long" })
    .trim(),

  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    })
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[a-z]/, { message: "Contain at least one character" })
    .regex(/[A-Z]/, { message: "Contain at least one capital character" })
    .regex(/[0-9]/, { message: "Contain at least one number" })
    .trim(),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
