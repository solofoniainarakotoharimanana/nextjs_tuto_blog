import {z} from 'zod';

export const RegisterSchema = z.object({
    name: z.string()
        .min(4, {message: "Name must be 4 or more caracters long"})
        .max(30, {message: "Name must be 30 or fewer caracter long"}),
    email: z.string().email(),
    password: z.string().min(6, {message: "Password must be 6 or more characters "}),
    confirmPassword: z.string()
}).refine(
    (values) => { return values.password === values.confirmPassword},
    {
        message: "Password must match!!",
        path: ['confirmPassword']
    }
)

export type RegisterSchemaType = z.infer<typeof RegisterSchema>