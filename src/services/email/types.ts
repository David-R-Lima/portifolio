import { z } from "zod"

export const schema = z.object({
    email: z.string().min(1),
    name: z.string().min(3).max(50),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters long"
    }),
})

export type Schema = z.infer<typeof schema>