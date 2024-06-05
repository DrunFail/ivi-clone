"use server";

import { cookies } from "next/headers";

export async function logoutAction() {
    try {
        await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/logout`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            }
        });
        cookies().delete("session");
        cookies().delete("refreshToken");
    }
    catch (error) {
        console.log(error);
    }
}