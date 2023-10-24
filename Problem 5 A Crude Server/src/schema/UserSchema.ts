import { z } from "zod"

export const createUserSchema = z.object({
    body: z.object({
        name: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
        age: z
        .number()
        .min(1, { message: "Age must be greater than 1!" })
        .max(150, { message: "Age must be lower than 150!"}),
        address: z
        .string()
        .min(5, {message: "Address must be greater than 5 characters!"})
    })
});

export const updateUserSchema = z.object({
    params: z.object({id: z.string()}),
    body: z.object({
        name: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
        age: z
        .number()
        .min(1, { message: "Age must be greater than 1!" })
        .max(150, { message: "Age must be lower than 150!"}),
        address: z
        .string()
        .min(5, {message: "Address must be greater than 5 characters!"})
    })
    .partial(),
})