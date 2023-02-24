
import z from "zod"

export const moviesSchema = z.object({
    id: z.number(),
    name: z.string().max(50),
    description: z.string().optional(),
    price:z.number().int().gt(0),
    duration:z.number().int().gt(0),
})

export const requestMovieSchema = moviesSchema.omit({id:true})

export const updateMovieSchema = requestMovieSchema.partial().refine(({ name, description, price, duration }) => name || description || price || duration,
{message:'must enter at least one of name, description, price or duration'});
