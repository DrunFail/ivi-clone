"use server"

import { getAccessToken } from "@/utils/getAccessToken";
import { revalidatePath } from "next/cache";

export async function createReview(newReview: any,revalidate?:string) {
    try {
        const token = getAccessToken();
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/reviews`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(newReview)
        });
        const out = await res.json();
        console.log(out)
    }
    catch (error) {
        console.log(error);
    }
    finally {
        if(revalidate) revalidatePath(revalidate)
    }
    
}