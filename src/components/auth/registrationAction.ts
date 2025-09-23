"use server"

import { z } from "zod";
import { AuthAPI } from "../../api/AuthAPI";
import { redirect } from "../../navigation";
import { isAxiosError } from "axios";

type RegistrationFormState =
    | {
        errors?: {
            email?: string[]
            password?: string[],
            confirmPassword?: string[],
            formError?: string[]
        }
        message?: string
    }
    | undefined


const RegistrationSchema = z.object({
    email: z
        .string()
        .email("invalidEmail")
        .trim(),
    password: z
        .string()
        .min(8, "minPwd")
        .max(20, "maxPwd")
        .trim(),
    confirmPassword: z.string(),
    formError: z.string()
}).superRefine(({ password, confirmPassword }, ctx) => {
    if (confirmPassword !== password) {
        ctx.addIssue({
            code: "custom",
            message: "confirmPwd",
            path: ["confirmPassword"]
        })
    }
})



export async function registrationAction(state: RegistrationFormState, formData: FormData) {
    const validatedFields = RegistrationSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword"),
        formError: formData.get("formError")
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { email, password } = validatedFields.data;
    let isSuccessRegistration: boolean = false;
    try {
        await AuthAPI.registration({ email, password });
        isSuccessRegistration = true;
    }
    catch (error) {
        if (isAxiosError(error)) {
            if (!error.response) {
                return {
                    errors: { formError: ["noResponse"] },
                }

            }
            if (error.response.status === 409) {
                return {
                    errors: { formError: ["userAlreadyExist"] },
                }
            }
            if (error.response.status === 424) {
                return {
                    errors: {formError: ["initServerFail"]}
                }
            }
            if (error.response.status === 500) {
                return {
                    errors: {formError: ["createUserFail"]}
                }
            }
        }
        console.log(error)
    }
    if (isSuccessRegistration) {
        redirect("/auth/login");
    }
}