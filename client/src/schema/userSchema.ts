import {z} from "zod";

export const userSignupSchema = z.object ({
    fullName : z.string().min(1,"Fullname is reuired"),
    email:z.string().email("Invalid email address"),
    password:z.string().min(6,"Password must be at least 6 characters."),
    phoneNumber:z.string().min(10,"Conctact number at least 10 digit")
});

export type SignupInputState = z.infer<typeof userSignupSchema>;


export const userLoginSchema = z.object ({
    email:z.string().email("Invalid email address"),
    password:z.string().min(6,"Password must be at least 6 characters."),
});

export type LoginInputState = z.infer<typeof userLoginSchema>;