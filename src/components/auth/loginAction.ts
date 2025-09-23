"use server"

import { z } from "zod";
import { AuthAPI } from "../../api/AuthAPI";
import { cookies } from "next/headers";
import { isAxiosError } from "axios";
import { redirect } from "next/navigation";




type FormState =
    | {
        errors?: {
            email?: string[]
            password?: string[]
            formError?:string[]
        }
        message?: string
    }
    | undefined


const LoginSchema = z.object({
    email: z
        .string()
        .email("invalidEmail")
        .trim(),
    password: z
        .string()
        .min(8, "minPwd")
        .max(20, "maxPwd")
        .trim(),
    formError: z.string()
})


export async function loginAction(state: FormState, formData: FormData) {
    const validatedFields = LoginSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
        formError:formData.get("formError")
    })
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }
    const { email, password } = validatedFields.data;
    let isSuccessLogin: boolean = false;
    try {
        const response = await AuthAPI.login({ email, password });
        const { refresh,token } = response.data;

        cookies().set('refreshToken', refresh, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production" ? true : false,
            expires: Date.now() + 3600000,
            sameSite: 'lax',
            path: '/',
        })
        cookies().set('session', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production" ? true : false,
            expires: Date.now() + 3600000,
            sameSite: 'lax',
            path: '/',
        })

        isSuccessLogin = true;
    }
    catch (error) {
        if (isAxiosError(error)) {
            if (!error.response) {
                return {
                    errors: { formError: ["noResponse"] },
                } 
            }
            if (error.response.status === 404 || error.response.status === 401) {
                return {
                    errors: { formError: ["invalidLoginData"] },
                } 

            }
        }
        console.log(error);
    }

    if (isSuccessLogin) {
        const backUrl = await cookies().get("backLoginUrl")?.value;
        console.log(backUrl)
        console.log(isSuccessLogin)
        cookies().delete("backLoginUrl");
        redirect(backUrl ? backUrl : "/");
    }

}

