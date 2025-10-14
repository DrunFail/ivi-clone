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
        const cookie = await cookies();
        cookie.delete("session");
        cookie.delete("refreshToken");
    }
    catch (error) {
        console.log(error);
    }
}