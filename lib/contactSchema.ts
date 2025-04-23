import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Email is invalid"),
  subject: z.string().min(1, "Subject is required"),
  contact: z
    .string()
    .optional()
    .refine((val) => !val || /^\d{10}$/.test(val), {
      message: "Contact is invalid",
    }),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactSchema = z.infer<typeof contactSchema>;
