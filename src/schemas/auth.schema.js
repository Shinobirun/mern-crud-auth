import{z} from 'zod'

export const registerSchema =z.object({
    username: z.string({
        required_error: 'Username is required',
    }),
    email: z.string({
        required_error: 'Email is requider',
    }).email({
        message:'Invalid email',
    }),
    password: z.string({
        required_error: 'Pasword is required',
    }).min(8,{
        message: 'Password must be at least 8 characters',
    }),

})

export const loginSchema = z.object({
    email: z.string({
        required_error: "Email is required",
    }).email({
        message:'invalid email'
    }),
    password: z.string({
        required_error: 'Password is required',
    }). min(8,{
        required_error: "Pasword must be at least 8 characters"
    })
});