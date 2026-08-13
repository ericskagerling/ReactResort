import z from "zod";

export type Customer = {
    firstName: string;
    lastName: string;
    email: string;
}

export const customerSchema = z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().email(),
})