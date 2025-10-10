"use server"

import { z } from "zod";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { authAPI } from "@/lib/api/authAPI";
import { HttpError } from "@/lib/error";
import { revalidatePath } from "next/cache";

type FormState =
    | {
        errors?: {
            email?: string[]
            password?: string[]
            formError?: string[]
        }
        message?: string
    }
    | null


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
        formError: formData.get("formError")
    })
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }
    const { email, password } = validatedFields.data;
    try {
        const response = await authAPI.login({ email, password });
        const { refresh, token } = response;

        cookies().set('refreshToken', refresh, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 30 * 24 * 60 * 60,
            sameSite: 'lax',
            path: '/',
        })
        cookies().set('session', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 15 * 60,
            sameSite: 'lax',
            path: '/',
        })

        revalidatePath('/[locale]', 'layout')
    }
    catch (error) {
        if (error instanceof HttpError) {
            if (error.statusCode === 404 || error.statusCode === 401) {
                return {
                    errors: { formError: ["invalidLoginData"] },
                }
            }
        }
        return {
            errors: { formError: ["noResponse"] },
        }
    }
    const backUrl = cookies().get("backLoginUrl")?.value;
    cookies().delete("backLoginUrl");
    redirect(backUrl || "/");

}

