import { type } from 'os'
import {TypeOf, z} from 'zod'

export const Movietype = z.object({
    body: z.object({
        name: z.string({
            required_error: "name is required",
            invalid_type_error: "you must writ the name"
        })
        .min(2,'the name muste to be great 2'),
        rating: z.number({
            required_error: "rating is required",
            invalid_type_error: "you must writ the rating"
        })
        .min(1,'the rating muste to be great 1')
        .max(5,'the rating muste to be les 5'),
        duration: z.number({
            required_error: "name is required",
            invalid_type_error: "you must writ the name"
        })
        .min(60,'duration must be more than 60'),
        genre: z.string({
            required_error: "genre is required",
            invalid_type_error: "Can only have these values : (Drama, Action , Comedy)"
        })

    })
})

export type createMovietype = TypeOf<typeof Movietype>["body"]