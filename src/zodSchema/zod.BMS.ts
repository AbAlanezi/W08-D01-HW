import {TypeOf, z} from 'zod'


export const BMStyeps = z.object({
    body: z.object({
        bmsId: z.string({
            required_error: "userId is required",
            invalid_type_error: "you must writ the userId"
        })
        .min(1,'userId  is required'),
        bookId: z.string({
            required_error: "bookID  is required",
            invalid_type_error: "you must writ the bookID "
        })
        .min(1,'bookID  is required')
    })
})

export type createBMStype = TypeOf<typeof BMStyeps>["body"]