import {z} from "zod";

export const descriptionSchema = z
  .string()
  .refine((value) => value.length <= 500, {
    message: "Description must not exceed 500 characters",
  });
